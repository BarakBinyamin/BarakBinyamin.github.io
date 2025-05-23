const fs             = require('fs')
const http           = require('http')
const https          = require('https')
const socketIo       = require('socket.io')
const cors           = require('cors')
const express        = require("express")
const cookieParser   = require('cookie-parser')
const { program }    = require('commander')

program
  .requiredOption('--port  <char>', 'internal api domain and port')
  .requiredOption('--webui <char>', 'Ex. https://pebblez.us or http://192.168.4.51:3000')
  .option('-d, --dev', 'Enable hot reload')
  .parse()

const options    = program.opts()
const API_PORT   = options.port
const WEBUI      = options.webui
const DEVMODE    = options.dev

const privateKey = fs.readFileSync('certs/privkey.pem', 'utf8')
const certificate= fs.readFileSync('certs/fullchain.pem', 'utf8')
const credentials= { key: privateKey, cert: certificate }

const api            = express()
const router         = express.Router()
const jsonParser     = express.json()
const server         = https.createServer(credentials, api)
const io             = socketIo(server)

const useCookies     = cors(
	{
	 origin: WEBUI, 
	 credentials: true,
	 optionsSuccessStatus: 200
	})
const dontUseCookies = cors(
	{
	 origin: "*", 
	 credentials: false,
	 optionsSuccessStatus: 200
	})

api.use(router)
api.use(jsonParser)
api.use(cookieParser())

api.use(dontUseCookies)

const blog        = require('./blog'     )(io)
const analytics   = require('./analytics')
const generic     = require('./generic'  )

   // Global middleware (runs before any routes)
api.use((req, res, next) => {
	const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
	console.log('hit',fullUrl)
	next(); // Call next() to pass control to the next middleware or route handler
});

api.use('/blog',     blog         ) 
api.use('/analytics',analytics    ) 
api.use('*',         generic      )

server.listen(API_PORT,()=>{console.log(`Launching api on port ${API_PORT}...`)})