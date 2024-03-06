<template>
  <div class="app" v-show="!showResume">
    <div id="1" v-show="!showMore">Welcome, thank you for your time</div>
    <div id="2" v-show="showMore">I'm hoping to have a fun interview today!</div>
  </div>
  <iframe v-show="showResume" class='fade-in-image' height="100%" width="100%" frameBorder="0" src="/BarakBinyamin-Resume.pdf"></iframe>
</template>

<script>

export default{
  data(){
    return {
      companyName : "Jeff",
      showMore    : false,
      showResume  : false,
      names       : ["Jeff", "Sarah", "John"]
    }
  },
  mounted(){
    this.foo()
  },
  methods: {
    async foo(){
      document.getElementById('1').classList.add("typewriter")
      await new Promise(res=>setTimeout(res,5000))
      // for (let i=0;i<this.names.length;i++){
      //   this.companyName = this.names[i]
      //   await new Promise(res=>setTimeout(res,1000))
      // } 
      this.showMore = true
      document.getElementById('2').classList.add("typewriter")

      await new Promise(res=>setTimeout(res,5000))
      this.showResume = true
  } 
 } 
}

</script>

<style>
.fade-in-image { 
  animation: fadeIn 5s; 
}
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

div{
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
}
.typewriter{
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 2s steps(40, end),
    blink-caret .75s step-end infinite;
}
/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange; }
}

* {
  box-sizing: border-box;
}
/* https://stackoverflow.com/questions/5102820/scrolling-of-whole-page-instead-of-inner-div-only */
html, body { height: 100%; } 
html,body{
  margin    : 0px;
  top       : 0px;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
}


.app{  
  display: grid;
  height: 100%;
  width: 100%;
  display: grid;
  justify-content : center;
  align-content   : center;
  overflow-x: hidden;
}
#app{
  width: 100%;
  height: 100%;
}
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

</style>
