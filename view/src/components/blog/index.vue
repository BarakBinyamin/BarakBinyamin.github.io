<template>
    <div class="article">
       <router-link to="/" class="back"> ← To Project Explorer (Backspace)</router-link>
       <div class="title"  >{{  item?.title  }}</div>
       <div class="description" >{{item?.description   }}</div>
       <div class="created">Created {{  item?.created   }}</div>
       <div class="updated">Last Updated {{  item?.updated   }}</div>
       <br>
       <markdown :markdownContent="item.content"/>
    </div>
 </template>
 
 <script>
import markdown from './viewMarkdown.vue'
 
 export default{
    components: {markdown},
    props: ['id'],
    data(){
       return{
          eventListener : "",
          item: "",
          foo: ""
       }
    },
    beforeMount(){
      this.addListener()
      this.item = this.$fuse.value.search({
         $and:[{id : this.id}]
      }).filter(item => item.item.id===this.id)?.[0]?.item
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
 .back{
   color: black;
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
 }
 .title{
    font-size: 3em;
 }
 .description{
   font-size: 1.5em;
   padding: 3px;
 }

 .created, .updated{
   color: grey;
   font-size: .8em;
   display: inline-block;
   padding: 5px;
 }
 </style>