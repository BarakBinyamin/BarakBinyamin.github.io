<template>
    <div class="blog">
       <div class="article">
          <!-- <router-link to="/" class="back"> ← To Project Explorer (Backspace)</router-link> -->
          <div class="title"  >{{  postMetadata?.title  }}</div>
          <div class="description" >{{postMetadata?.description   }}</div>
          <!-- <div class="tags" >
             {{blog?.description}}
          </div> -->
          <div class="created">Created {{  postMetadata?.created   }}</div>
          <div class="updated">Last Updated {{  postMetadata?.updated   }}</div>
          <br>
          <markdown :markdownContent="post"/>

          <hr>
          <comments/>
       </div>
       

    </div>
    <div class="space"></div>
  </template>
  
  <script>
 import markdown from './viewMarkdown.vue'
 import comments from "./comments.vue"

  
  export default{
     components: {markdown, comments},
     props: ['id'],
     data(){
        return{
           eventListener : "",
           post: "",
           postMetadata: {}
        }
     },
     async beforeMount(){
      // this.addListener()
     
      // 1. Get post database
      const posts = await (await fetch('/posts/posts.json')).json()
      // 2. Find the metadata id
      this.postMetadata = posts.find(item => item.id === this.id)
      let post = await (await fetch(this.postMetadata.url)).text()
      // 3. Reformat the image links
      post = post.replaceAll(
         /src\="/g,
         `src="${this.postMetadata.url.replace('/README.md','')}`
      )
      // 4. Remove title and descripton from markdown section
      post               = post.split('\n'); post.shift(); post.shift(); 
      this.post          = post.join('\n')


     },
     methods: {
       handleEvent(event){
          if (event.key==="Backspace"){
             window.removeEventListener("keyup", this.handleEvent)
             this.$router.push("/")
          }
       },
       addListener(){
          window.addEventListener("keyup", this.handleEvent)
       }
     }
  }
  </script>
  
  <style scoped>
  hr{
   color: var(--second-font-color);
   border-color: var(--second-font-color);
   background: var(--second-font-color);
   height: 1px;
   margin: 15px 0px 15px 0px;
  }
  .blog{
    width: 100%;
    display: grid;
    justify-content: center;
    
  }
  .back{
    color: var(--main-font-color);
    text-decoration: underline;
  }
  .back:hover{
    opacity: .8;
  }
 
  .article{
    -webkit-user-select: text;
    -ms-user-select: text;
    user-select: text; 
    overflow: hidden;
    padding: 10px;
    overflow-x: hidden;
    max-width: 900px;
    align-self: center;
    padding-right: auto;
    padding-left: auto;
  }
  .title{
     font-size: 3em;
     padding: 0px;
     margin: 0px;
  }
  .description{
    font-size: 1.5em;
    padding: 3px;
    color: var(--third-font-color);
  }
 
  .created, .updated{
    color: var(--second-font-color);
    font-size: .8em;
    display: inline-block;
    padding: 5px;
  }
  .space{
    height: 100px;
  }
  </style>