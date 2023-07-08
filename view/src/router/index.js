import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from   '../pages/PageNotFound.vue'
import Homepage from  '../pages/homepage/index.vue'
import Post from  '../pages/posts/index.vue'
import Contact from  '../pages/contact/index.vue'

/* Define routes and rendering in order of priority */
const routes = [
  {  
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {  
    path: '/posts/:id',
    props: true,
    name: 'postid',
    component: Post,
  },
  {  
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

/* Hacky way to add titles from the matched component properties */
// router.beforeEach((to, from, next) => {
//   if (to.matched.at(-1)){
//     const title = to.matched.at(-1).components.default.title
//     document.title = title
//   }
//   next()
// })

export default router;