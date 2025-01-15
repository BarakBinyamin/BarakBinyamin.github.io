<template>
  <!-- This is the plan -->
  <navbar/>
  <router-view />

  <!--  -->
  <!-- <img width=500 style="text-align:center" src="/beach.jpeg"/> -->
</template>
<script>
import navbar from "./components/navbar/index.vue"
export default {
    name: 'dropdown',
    components: { navbar }
}

</script>
<style >
/* Defaults & style */
html{
  background         : #FEFFFE;
  font-family        : "Inter", serif;
  font-optical-sizing: auto;
  font-weight        : 100;
  font-style         : normal;
  color              : black;
  font-size          : 25px;
  width              : 100vw;
  height             : 100%;
  margin             : 0;
  overflow           : hidden;
}
a{
  color: black;
  text-decoration: none;
}
a:hover{
  cursor: crosshair;
  opacity: .6;
}
img {
  /* filter: sepia(20%) grayscale(20%) contrast(150%); */
  transition: filter 0.3s ease;
}
</style>
