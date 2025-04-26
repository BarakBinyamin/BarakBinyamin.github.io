const express         = require('express')
// const rateLimit       = require('express-rate-limit')
const router          = express.Router()

// const { MeiliSearch } = require('meilisearch')

// const MEILI_URL        = process.env.MEILI_URL || 'http://meilisearch:7700' 
// const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY

// const client = new MeiliSearch({
//   host  : MEILI_URL, 
//   apiKey: MEILI_MASTER_KEY,     
// })
// const index = client.index('blogs')

// const limiter = rateLimit({
//     windowMs: 5 * 60 * 1000, // 5 minutes
//     max     : 100,           // max 100 requests per 5 minutes per IP
//     message : 'Too many requests, please try again laters'
// })
// router.use(limiter)

const views = {}

function fail(res,err){
  res.send({"success":false, "error":err})
}
function success(res){
  res.send({"success":true})
}

module.exports = () => {
  router.post('/logView', async (req, res) => { 
    try {
      const { query } = req.body
      if (!query) {
        fail(res)
      }else{
        views[query] = number(views?.[query]) + 1
        success(res)
      }
    } catch (err) {
      fail(res,err)
    }
  })
  router.get('/views', async (req, res) => {
    res.send({
        "success" : true,
        "views"   : views
    })
  })
  router.get('/', async (req, res) => {
    console.log('here')
    success(res)
  })
  router.post('/*', async (req, res) => {
    fail(res)
  })

  return router
}

 
