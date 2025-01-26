import { createApp } from 'vue'
import App           from './App.vue'
import clickOutside  from "./directives/click-outside.js"
import router        from './pages'
import Lenis         from 'lenis'

const app = createApp(App)
app.use(router         )
app.use(clickOutside   )

// Initialize Lenis - Nice Scrolling
const lenis = new Lenis();
function raf(time) {lenis.raf(time);requestAnimationFrame(raf);}
requestAnimationFrame(raf);

app.mount('#app')
