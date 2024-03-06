<template>
  <!-- Interface for sizing and colors, emits a vue resize event when the window changes size -->
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
/* :root {
  --main-bg-color    : #313134;  
  --second-bg-color  : #1F2124; 
  --third-bg-color   : lightblue;
  --main-border-color: rgba(128, 128, 128, 0.198);
  --shaddow-bg-color : darkblue; 
  --main-font-color  : #FFC09F; 
  --second-font-color: #4281A4; 
  --third-font-color : grey;
  --link-font-color  : #CB769E;
  --hover-font-color : #cb769ee6; 
  --main-font-size   : #cb769ee6; 
  --h1-font-size     : #cb769ee6; 
  --h2-font-size     : #cb769ee6; 
  --h3-font-size     : #cb769ee6; 
} */

/* :root {
  --main-bg-color    : whitesmoke; 
  --second-bg-color  : white; 
  --third-bg-color   : lightblue;
  --shaddow-bg-color : rgba(0,0,0,.5); 
  --main-font-color  : black; 
  --second-font-color: rgba(0,0,0,.5); 
  --link-font-color  : darkblue;
  --hover-font-color : darkcyan;
} */
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

/* https://profiles.wordpress.org/chiragpatel/ */
:root {
  --main-bg-color    : #FFFAFF;  
  --second-bg-color  : #2A372D; 
  --third-bg-color   : lightblue;
  --main-border-color: rgba(128, 128, 128, 0.198);
  --shaddow-bg-color : darkblue; 
  --main-font-color  : #313031;
  --second-font-color: #FFFFFF; 
  --third-font-color : whitesmoke;
  /* --link-font-color  : #CB769E; */
  --link-font-color  : #3E92CC;
  --hover-font-color : #cb769ee6; 
  /* --font-family      : 'Inter', sans-serif; */
  --main-font-family      : 'Poppins', sans-serif;
  --second-font-family    : 'Capriola', sans-serif;
  --big-font-size    : 25px; 
  --h1-font-size     : 20px; 
  --h2-font-size     : 16px; 
  --h3-font-size     : 14px; 
}

/* classic defaults */
* {
  box-sizing: border-box;
  margin    : 0;
  padding   : 0;
}
html{
  /* enables “momentum” smooth) scrolling */
  touch-action              : none;
  -ms-overflow-style        : none;  
  -webkit-overflow-scrolling: touch; 
  scroll-behavior           : smooth;
  

  /* Nice Font */
  font-family            : var(--main-font-family);
  -webkit-font-smoothing : antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* By default text is non selectable */
  -webkit-user-select: none;
  -ms-user-select    : none;
  user-select        : none;
  -webkit-tap-highlight-color: transparent;


  /* Main Colors */
  background-color       : var(--main-bg-color);
  color                  : var(--main-font-color);

  transition: background-color .4s;
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
  overflow-x: hidden;
}

a{
  color          : var(--link-font-color);
  font-weight    : bold;
  text-decoration: none;
}

a:hover{
  color          : var(--hover-font-color);
  /* text-decoration: underline; */
}

</style>