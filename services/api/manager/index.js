const express = require('express');
const webPush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

// Initialize express app
const app = express();
const port = 3000;

// Set up body parser for JSON handling
app.use(bodyParser.json());

// Static files (HTML, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// VAPID keys for web push (you should generate these in real applications)
const VAPID_KEYS = webPush.generateVAPIDKeys();
console.log('VAPID Public Key:', VAPID_KEYS.publicKey);
console.log('VAPID Private Key:', VAPID_KEYS.privateKey);

// Set Web Push VAPID keys
webPush.setVapidDetails(
  'mailto:your-email@example.com', // Email (can be anything)
  VAPID_KEYS.publicKey,
  VAPID_KEYS.privateKey
);

// Route to subscribe to push notifications
app.post('/subscribe', (req, res) => {
  const subscription = req.body;

  // Store the subscription information (in a real app, save this in a database)
  console.log('Received subscription:', subscription);

  // Send a success response
  res.status(201).json({});
});

// Route to trigger sending a push notification
app.post('/send-notification', (req, res) => {
  const subscription = req.body.subscription;
  const payload = req.body.payload || 'Hello from Express Server!';

  // Send a push notification to the subscribed client
  webPush.sendNotification(subscription, payload)
    .then(() => res.status(200).json({ message: 'Notification sent' }))
    .catch(err => {
      console.error('Error sending notification', err);
      res.status(500).json({ error: 'Failed to send notification' });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
