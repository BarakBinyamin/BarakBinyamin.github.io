import { createWebHistory, createRouter } from "vue-router";
// import PageNotFound from   '../pages/PageNotFound.vue'
import Homepage from  '../components/homepage/index.vue'
import Blog     from  '../components/blog/index.vue'


/* Define routes and rendering in order of priority */
const routes = [
  {  
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
  {  
    path: '/blog/:id',
    props: true,
    name: 'Blog',
    component: Blog,
  },
  // { 
  //   path: '/:pathMatch(.*)*',
  //   name: 'PageNotFound',
  //   component: PageNotFound
  // }
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