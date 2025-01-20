<template>
    <!-- This is the plan -->
    <navbar/>
    <router-view />
    <!-- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6fAnORtBcM6HQWxjvsGxO3?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> -->
    <!-- <div style="background:blue ; height:1000px; width: 100px;"></div> -->
    <!-- <bottom/> -->
    <!--  -->
    <!-- <img width=500 style="text-align:center" src="/beach.jpeg"/> -->
</template>

<script>
import navbar from "./components/navbar/index.vue"
import bottom from "./components/footer/index.vue"

export default {
    name: 'dropdown',
    components: { navbar, bottom },
    onMounted(){
      // window.addEventListener('resize', () => {
      //   let vh = window.innerHeight * 0.01
      //   document.documentElement.style.setProperty('--vh', `${vh}px`)
      //   this.$emit('resize',{vh:vh})
      // })
    }
}

</script>
<style >
/* Defaults & style */
* {
  box-sizing: border-box;
}
/* https://stackoverflow.com/questions/5102820/scrolling-of-whole-page-instead-of-inner-div-only */
html, body { height: 100%; } 
html,body{
  margin    : 0px;
  top       : 0px;
  background: var(--bg-color);
  overflow-x: hidden;
  overflow-y: scroll;
}
/* body{
  min-height: 100vh; 
  min-height: calc(var(--vh, 1vh) * 100); 
} */
html,body{
  background         : #FEFFFE;
  font-family        : "Inter", serif;
  font-optical-sizing: auto;
  font-weight        : 100;
  font-style         : normal;
  color              : black;
  font-size          : 25px;
}
/* #app{
  height: 100%;
} */
a{
  color: black;
  text-decoration: none;
}
a:hover{
  cursor: crosshair;
  opacity: .6;
}
.link{
  color: purple;
}
.link:hover{
  cursor: crosshair;
  opacity: .6;
}
.icon-link:hover{
  cursor: crosshair;
  opacity: .6;
}
img {
  /* filter: sepia(20%) grayscale(20%) contrast(150%); */
  transition: filter 0.3s ease;
}
.space{
  display: block;
  width: 100%;
  height: max-content;
}
</style>
