<template>
  <div id="markdown" v-html='markdownHTML'></div>
</template>

<script>
import Prism    from "prismjs"
import "prismjs/themes/prism-tomorrow.css"
import showdown from "showdown"

export default{
  props: ['markdownContent'],
  data(){
    return {
      markdownHTML : ""
    }
  },
  async beforeMount(){
    // Get markdown, convert it to html
    const markdown    = this.markdownContent//await (await fetch(this.markdownurl)).text()
    // Fix checkbox inline css using regex extension https://github.com/showdownjs/showdown/issues/593 
    var taskListEnablerExtension = function() {
      return [{
          type: 'output',
          regex: /<input type="checkbox"?/g,
          replace: '<input type="checkbox" style="margin: 0px 0.35em 0.25em; vertical-align: middle;"'
      }]
    }
    const options     = {tasklists:true, tablesHeaderId: true, openLinksInNewWindow: true, extensions: []}
    const converter   = new showdown.Converter(options)
    converter.setFlavor('github')

    this.markdownHTML = await converter.makeHtml(markdown)

    // Wait for vue to process into the v-html
    await new Promise(resolve=>setTimeout(resolve,50))
    // Highlight any code
    Prism.highlightAll()

    // Add Copy Code Buttons
    const doc = document.createElement('div')
    //// Add a template check to the html display:none to copy from
    const checkedTemplate = `<svg style="display:none" id="checkedTemplate" class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/><path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>`
    doc.innerHTML = checkedTemplate;
    document.body.insertBefore(doc, document.body.childNodes[0])
    //// When clipboard is clicked, copy the parents divs inner text, then replace the clipboard svg with a copy of the check
    const clipboard = `<div class="copy"
    onclick="navigator.clipboard.writeText(this.parentNode.parentNode.innerText);this.childNodes[0].replaceWith(document.getElementById('checkedTemplate').cloneNode(true));this.childNodes[0].style.display='';"><svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Copy"> <path id="Vector" d="M9 9V6.2002C9 5.08009 9 4.51962 9.21799 4.0918C9.40973 3.71547 9.71547 3.40973 10.0918 3.21799C10.5196 3 11.0801 3 12.2002 3H17.8002C18.9203 3 19.4801 3 19.9079 3.21799C20.2842 3.40973 20.5905 3.71547 20.7822 4.0918C21.0002 4.51962 21.0002 5.07967 21.0002 6.19978V11.7998C21.0002 12.9199 21.0002 13.48 20.7822 13.9078C20.5905 14.2841 20.2839 14.5905 19.9076 14.7822C19.4802 15 18.921 15 17.8031 15H15M9 9H6.2002C5.08009 9 4.51962 9 4.0918 9.21799C3.71547 9.40973 3.40973 9.71547 3.21799 10.0918C3 10.5196 3 11.0801 3 12.2002V17.8002C3 18.9203 3 19.4801 3.21799 19.9079C3.40973 20.2842 3.71547 20.5905 4.0918 20.7822C4.5192 21 5.07899 21 6.19691 21H11.8036C12.9215 21 13.4805 21 13.9079 20.7822C14.2842 20.5905 14.5905 20.2839 14.7822 19.9076C15 19.4802 15 18.921 15 17.8031V15M9 9H11.8002C12.9203 9 13.4801 9 13.9079 9.21799C14.2842 9.40973 14.5905 9.71547 14.7822 10.0918C15 10.5192 15 11.079 15 12.1969L15 15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    </div>`
    //// Add clipboard to every <code> div
    const markdownElement = document.getElementById('markdown')
    let codeTags = markdownElement.querySelectorAll("code")
    for (let i=0; i<codeTags.length; i++){ 
      let parent    = codeTags[i].parentNode
      const div     = document.createElement('div')
      div.innerHTML = clipboard.trim()
      parent.insertBefore(div.firstChild,codeTags[i])
    }
  }

}
</script>

<style>
#markdown{
  padding: 5px !important;
}

pre{
  position: relative;
  border-radius: 5px;
  overflow-x: scroll;
  margin: 20px 20px 20px 20px !important;
  padding: 1em !important;
  font-size: .8em !important;
}

@media (any-pointer: coarse)  {
  pre{
    position: relative;
    border-radius: 5px;
    overflow-x: scroll;
    margin: 10px 10px 10px 10px !important;
    padding: 1em !important;
    font-size: .7em !important;
  }
}

code{
  height: min-content !important;
  padding: 0px !important;
  margin: 0px !important;
}

.copy{
  position: absolute;
  top: 5px;
  right: 5px;
  display: block;
  width: 35px;
  height: 35px;
  background-color: rgba(60,60,60);
  border-radius: 5px;
  opacity: .8;
  border: 1px rgba(60,60,60,0) solid;
}

.copy:hover{
  display: block;
  opacity: .6;
  border: 1px white solid;
}

.added{
  background: green;
  float:right;
}

.checkmark__circle {
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 2;
  stroke-miterlimit: 10;
  stroke: #7ac142;
  fill: none;
  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
}

.checkmark {
  z-index:5;
  position:absolute;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: block;
  stroke-width: 2;
  stroke: #fff;
  stroke-miterlimit: 10;
  box-shadow: inset 0px 0px 0px #7ac142;
  animation: fill .2s ease-in-out .2s forwards, scale .15s ease-in-out .45s both;
  opacity: .8;
}
.checkmark__check {
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: stroke 0.15s cubic-bezier(0.65, 0, 0.45, 1) 0.4s forwards;
}

@keyframes stroke {
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes scale {
  0%, 100% {
    transform: none;
  }
  50% {
    transform: scale3d(1.1, 1.1, 1);
  }
}
@keyframes fill {
  100% {
    box-shadow: inset 0px 0px 0px 30px #7ac142;
  }
}

li,ul,li::marker{
  margin: 0px !important;
  margin: 0px !important;
  padding: 0px !important;
  margin: 0px !important;
  list-style-position: outside;
}

li{
  margin-left: 25px !important;
}

a{
  color: darkcyan;
  font-weight: bold;
  text-decoration: none;
}

a:hover{
  color: darkblue;
  text-decoration: underline;
}

</style>