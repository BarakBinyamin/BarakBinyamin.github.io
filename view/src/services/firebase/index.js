import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://DATABASE_NAME.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


const firebaseApp = initializeApp({
    apiKey: "AIzaSyDYzpmb0dkIJx0sarBw0r3Vg0orP42JVqY",
    authDomain: "rockydev-821fd.firebaseapp.com",
    projectId: "rockydev-821fd",
    storageBucket: "rockydev-821fd.appspot.com",
    messagingSenderId: "929293002569",
    appId: "1:929293002569:web:81ac195e6b772a28975c98"
})

