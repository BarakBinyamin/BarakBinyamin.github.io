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
:root {
  --main-bg-color    : whitesmoke;  
  --second-bg-color  : white; 
  --third-bg-color   : lightblue;
  --shaddow-bg-color : rgba(0,0,0,.5); 
  --main-font-color  : black; 
  --second-font-color: rgba(0,0,0,.5); 
  --link-font-color  : darkblue;
  --hover-font-color : darkcyan;
}
/* :root {
  --main-bg-color    : #CFFCFF;  
  --second-bg-color  : #4281A4; 
  --third-bg-color   : lightblue;
  --shaddow-bg-color : darkblue; 
  --main-font-color  : #FFC09F; 
  --second-font-color: #4281A4; 
  --link-font-color  : #CB769E;
  --hover-font-color : darkblue; 
} */

/* classic defaults */
* {
  box-sizing: border-box;
  margin    : 0;
  padding   : 0;
}

body{  
  margin    : 0px;
  padding   : 0;
  width     : 100vw;
  overflow-y: scroll;
  position  : relative;
  /*overflow: hidden;*/  
  max-width : 100vw;
  /*Getting the right height for mobile devices: https://css-tricks.com/the-trick-to-viewport-units-on-mobile/ */
  min-height: 100vh; /* Fallback for browsers that do not support Custom Properties */
  min-height: calc(var(--vh, 1vh) * 100);
}

html { 
  background-color       : var(--main-bg-color);/*#0d1117;*/
  color                  : var(--main-font-color);
  /*margin-right:10px;*/
  -webkit-overflow-scrolling: touch; /* enables “momentum” (smooth) scrolling */
  overflow-x             : hidden;
  /* Nice Font */
  font-family            : Avenir, Helvetica, Arial, sans-serif;
  font-family            : 'Source Sans Pro';
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* By default text is non selectable */
  -webkit-user-select    : none;
  -ms-user-select        : none;
  user-select            : none;  
  /* no zoom */
  touch-action           : pan-x pan-y;
  /* touch-action: none; /* no scroll, no zoom for sure */
}

a{
  color          : var(--link-font-color);
  font-weight    : bold;
  text-decoration: none;
}

a:hover{
  color          : var(--hover-font-color);
  text-decoration: underline;
}
</style>