const express         = require('express')
const router          = express.Router()
const { MeiliSearch } = require('meilisearch')

const MEILI_URL        = process.env.MEILI_URL || 'http://meilisearch:7700' 
const MEILI_MASTER_KEY = process.env.MEILI_MASTER_KEY

const client = new MeiliSearch({
  host  : MEILI_URL, 
  apiKey: MEILI_MASTER_KEY,     
})
const index = client.index('blogs')

// ----- Logic ------
// walled createBlog
// walled updateBlog
// walled deleteBlog
// getBlog(id) // by id
// searchBlog()
// subscribetoBlog(email) // add homie to the email list

function fail(res,err){
  res.send({"success":false, "error":err})
}
function success(res){
  res.send({"success":true})
}

// Routes
module.exports = (io) => {
  router.post('/createBlog', async (req, res) => { 
    try {
      const { id, title, subtitle, img, date, author, content, tags } = req.body
      if (!title || !content) {fail(res)}
      const blog = {
        id       : id,        // title but with hypens
        title    : title,    
        subtitle : subtitle, 
        img      : img,       // cover image
        date     : date,      // UTC seconds since 1970
        author   : author,
        content  : content,   // markdown text
        tags     : tags || []
      } 
      const result = await index.addDocuments([blog])
      success(res)
    } catch (err) {
      fail(res,err)
    }
  })

  router.post('/updateBlog', async (req, res) => {
    try {
      const { id, title, subtitle, img, date, author, content, tags } = req.body
      if (!title || !content) {fail(res)}
      const blog = {
        id       : id,        // title but with hypens
        title    : title,    
        subtitle : subtitle, 
        img      : img,       // cover image
        date     : date,      // UTC seconds since 1970
        author   : author,
        content  : content,   // markdown text
        tags     : tags || []
      } 
      const result = await index.addDocuments([blog])
      success(res)
    } catch (err) {
      fail(res)
    }
  })

  router.delete('/deleteBlog/:id', async (req, res) => {
    try {
      const { id } = req.params
      await index.deleteDocument(id)
      success(res)
    } catch (err) {
      fail(res)
    }
  })

  router.get('/getBlog/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const blog = await index.getDocument(id)
      if (!blog) {
        return res.status(404).send('Blog not found')
      }
      res.json(blog);
      } catch (err) {
        res.status(500).send('Error fetching blog: ' + err.message)
    }
  })

  // working yay
  router.post('/searchBlog', async (req, res) => {
    try {
      const { query } = req.body
      if (!query) {
        return res.status(400).send('Query parameter is required')
      }
      const searchResults = await index.search(query, {limit: 10 })

      res.json(searchResults);
    } catch (err) {
      fail(res)
    }
  })
  router.get('/', async (req, res) => {
    console.log('here1')
    res.send({"success":true})
  })
  router.post('/*', async (req, res) => {
    console.log('here2')
    fail(res)
  })

  return router
}

 // // 6. Subscribe to a blog
  // app.post('/subscribeToBlog', (req, res) => {
  //   const { email } = req.body;

  //   if (!email) {
  //     return res.status(400).send('Email is required');
  //   }

  //   // Check if email is already subscribed
  //   if (subscribers.includes(email)) {
  //     return res.status(400).send('Email is already subscribed');
  //   }

  //   subscribers.push(email);

  //   res.status(201).send('Subscribed successfully');
  // });

  // // WebSocket events inside the same file
  // // use of systax, full path syntax probably
  // io.on('connection', (socket) => {
  //   console.log(`${config.appName}: A new WebSocket connection established!`);

  //   // Handle incoming WebSocket message (chat-message)
  //   socket.on('chat-message', (message) => {
  //     console.log('Received WebSocket message:', message);
  //     // Broadcast the message to all connected clients
  //     io.emit('chat-message', message);
  //   });

  //   // Handle WebSocket room join event
  //   socket.on('join-room', (roomName) => {
  //     socket.join(roomName);
  //     console.log(`${config.appName}: User joined room: ${roomName}`);
  //   });

  //   // Handle disconnection
  //   socket.on('disconnect', () => {
  //     console.log(`${config.appName}: A WebSocket connection was disconnected`);
  //   });
  // });
