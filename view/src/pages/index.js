import { createWebHistory, createRouter } from "vue-router";
import PageNotFound from   '../pages/PageNotFound.vue'
import Homepage from  '../pages/homepage/index.vue'
// import Post from  '../pages/posts/index.vue'
import Contact from  '../pages/contact/index.vue'
import Album from  '../pages/album/index.vue'
import Blog from  '../pages/blog/index.vue'
// import Store from  '../pages/posts/index.vue'

/* Define routes and rendering in order of priority */
const routes = [
  {  
    path: '/',
    name: 'Homepage',
    component: Homepage,
  },
    {  
    path: '/album',
    name: 'album',
    component: Album,
  },
  // {  
  //   path: '/contact',
  //   name: 'contact',
  //   component: Contact,
  // },
  // {  
  //   path: '/blog/:id',
  //   props: true,
  //   name: 'postid',
  //   component: Post,
  // },
   {  
    path: '/blog',
    props: true,
    name: 'blog',
    component: Blog,
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