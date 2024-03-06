<template>
    <div class="navbar"></div>
    <div v-if="!blog" class="banner-container">
        <div class="title">Cool Stuff</div>
        <div>By Barak Binyamin</div>
    </div>
    <div class="searchbar">searchbar</div>
    <div v-if="blog" class="blog-container">
        <div class="leftbar">hey</div>
        <blog/>
    </div>
    <div v-else class="search-results">
        results
    </div>
    <div class="totop"></div>
</template>

<script>
import blog from './blog/blogTemplate.vue'

export default{
  components: {blog},
  data(){
    return {
        blog : "a"
    }
  }
}
</script>

<style scoped>
.title{
    font-size: 50px;
    font-weight: bold;
    font-family: 'Roboto Mono'
}
.navbar{
    top:0;
    margin:0;
    width:100%;
    height: 45px;
    background: black;
}
.banner-container{
    display: grid;
    justify-items: center;
}
.banner{
    content: url("/banner.jpeg");
    width: min(380px, 100vw);
}
.searchbar{

}
.blog-container{
    display: grid;
    height: 100%;
    background: grey;
    grid-template-columns: 250px auto;
    min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
    min-height: calc(var(--vh, 1vh) * 100);
}
@media only screen and (max-width: 800px) {
    .blog-container{
        grid-template-columns: auto;
        margin: 5px;
        width: calc(100vw - 2 * 5px);
    }
}
.leftbar{
    height: 100%;
    background: blue;
}
@media only screen and (max-width: 800px) {
    .leftbar{
        display: none;
    }
}

.footer{
    
}
</style>