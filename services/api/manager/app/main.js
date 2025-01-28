// Check if the browser supports service workers and push notifications
if ('serviceWorker' in navigator && 'PushManager' in window) {
    console.log('Push notifications are supported.');
  
    // Register the service worker
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(err => {
        console.log('Service Worker registration failed:', err);
      });
  
    // Request push notification permission from the user
    document.getElementById('subscribeBtn').addEventListener('click', () => {
      Notification.requestPermission()
        .then(permission => {
          if (permission === 'granted') {
            console.log('Notification permission granted.');
  
            // Subscribe to push notifications
            subscribeUserToPush();
          } else {
            console.log('Notification permission denied.');
          }
        });
    });
  
    // Handle the "Send Notification" button
    document.getElementById('sendBtn').addEventListener('click', () => {
      fetch('/send-notification', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          subscription: window.pushSubscription, // Send the stored subscription
          payload: 'This is a test notification sent from Express.js server'
        })
      })
      .then(response => response.json())
      .then(data => console.log('Notification sent:', data))
      .catch(error => console.error('Error sending notification:', error));
    });
  }
  
  // Subscribe the user to push notifications
  function subscribeUserToPush() {
    navigator.serviceWorker.ready.then(registration => {
      registration.pushManager.subscribe({
        userVisibleOnly: true,  // Important: Ensures the notification is shown to the user
        applicationServerKey: 'YOUR_PUBLIC_VAPID_KEY'  // Replace with the VAPID public key
      })
      .then(subscription => {
        console.log('User is subscribed:', subscription);
  
        // Store the subscription on the server (this is a simplified version)
        window.pushSubscription = subscription;
  
        // Send subscription to the server
        fetch('/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(subscription)
        })
        .then(response => response.json())
        .then(data => console.log('Subscribed successfully:', data))
        .catch(error => console.error('Error subscribing:', error));
      })
      .catch(err => {
        console.error('Failed to subscribe the user:', err);
      });
    });
  }
  