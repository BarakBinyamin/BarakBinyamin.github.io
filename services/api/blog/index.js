const express = require('express')
const router = express.Router()

// Logic
// walled createBlog
// walled updateBlog
// walled deleteBlog
// getBlog(id) // by id
// searchBlog()
// subscribetoBlog(email) // add homie to the email list

// Routes
module.exports = (io, config) => {
  // Example HTTP route: GET /api/hello
  router.get('/hello', (req, res) => {
    res.json({
      message: `Hello from ${config.appName}!`,
      version: config.version,
    });
  });

  // Example POST route: /api/message
  router.post('/message', (req, res) => {
    const { message } = req.body;
    res.json({
      receivedMessage: message,
      apiPrefix: config.apiPrefix,
    });
  });

  // WebSocket events inside the same file
  // use of systax, full path syntax probably
  io.on('connection', (socket) => {
    console.log(`${config.appName}: A new WebSocket connection established!`);

    // Handle incoming WebSocket message (chat-message)
    socket.on('chat-message', (message) => {
      console.log('Received WebSocket message:', message);
      // Broadcast the message to all connected clients
      io.emit('chat-message', message);
    });

    // Handle WebSocket room join event
    socket.on('join-room', (roomName) => {
      socket.join(roomName);
      console.log(`${config.appName}: User joined room: ${roomName}`);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      console.log(`${config.appName}: A WebSocket connection was disconnected`);
    });
  });

  return router;
};
