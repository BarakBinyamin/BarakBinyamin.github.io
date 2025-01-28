const express  = require('express');
const http     =    require('http');
const socketIo = require('socket.io')
const app      = express();
const port = 3000;

// Create an HTTP server
const server = http.createServer(app);

// Set up socket.io with the HTTP server
const io = socketIo(server);

// A simple route (non-WebSocket)
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Handle WebSocket connections, listening on /ws (with socket.io's default namespace)
io.of('/ws').on('connection', (socket) => {
  console.log('A WebSocket client connected on /ws');

  // Listen for messages from the client
  socket.on('message', (message) => {
    console.log(`Received message: ${message}`);
  });

  // Send a welcome message to the client
  socket.emit('message', 'Welcome to WebSocket communication on /ws!');

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('A WebSocket client disconnected');
  });
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
