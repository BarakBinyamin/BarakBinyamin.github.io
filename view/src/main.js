import { createApp } from 'vue'
import { ref } from 'vue'
import App  from './App.vue'

const app = createApp(App)

import router from './router'
app.use(router)

import Fuse from 'fuse.js'
import database from './assets/database.json'
const options = {
    ignoreLocation: true,
    includeScore  : true,
    includeMatches: true,
    // Search in `author` and in `tags` array
    keys: ['title','description','content','tags','id']
}
const fuse = new Fuse(database, options)
app.config.globalProperties.$fuse = ref(fuse) // usage this.$fuse.value.search("whatever")

app.mount('#app')
