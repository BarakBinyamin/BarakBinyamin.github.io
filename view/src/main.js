import { createApp } from 'vue'
// import { ref }       from 'vue'
import App           from './App.vue'
// import clickOutside  from "./services/directives/click-outside.js"
import router        from './pages'

const app = createApp(App)
app.use(router         )
// app.use(clickOutside   )

app.mount('#app')
