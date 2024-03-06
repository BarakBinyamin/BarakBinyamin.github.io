import { createApp } from 'vue'
import { ref }       from 'vue'
import App  from './App.vue'
import clickOutside  from "./services/directives/click-outside.js"
import router        from './router'


import { initializeApp } from "firebase/app"
import { getDatabase, ref as firbaseRef, child, get } from "firebase/database"
const firebaseConfig = {
    apiKey           : "AIzaSyDYzpmb0dkIJx0sarBw0r3Vg0orP42JVqY",
    authDomain       : "rockydev-821fd.firebaseapp.com",
    projectId        : "rockydev-821fd",
    storageBucket    : "rockydev-821fd.appspot.com",
    messagingSenderId: "929293002569",
    appId            : "1:929293002569:web:81ac195e6b772a28975c98"
}
const firebaseApp = initializeApp(firebaseConfig)
const database    = getDatabase(firebaseApp)
const dbRef       = firbaseRef(database) 

const app = createApp(App)
app.use(router         )
app.use(clickOutside   )

app.config.globalProperties.$DATABASE  = ref(dbRef)

app.mount('#app')
