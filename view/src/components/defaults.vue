<template>

</template>

<script>
export default{
  mounted(){
    window.addEventListener('resize', () => {
        let vh = window.innerHeight * 0.01
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        this.$emit('resize',{vh:vh})
    })
  }
}
</script>

<style>
/* classic defaults */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body{  
  margin: 0px;
  padding: 0;
  /*display: grid;*/
  width: 100vw;
  overflow-y: scroll;
  position: relative;
  /*overflow: hidden;*/  
  max-width: 100vw;
  /*Getting the right height for mobile devices: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);
}

html { 
  background-color: whitesmoke;/*#0d1117;*/
  /*margin-right:10px;*/
  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
  overflow-x: hidden;
  /* Nice Font */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Source Sans Pro';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* By default text is non selectable */
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;  
  /* no zoom */
  touch-action: pan-x pan-y;
  /* touch-action: none; /* no scroll, no zoom for sure */
}
</style>