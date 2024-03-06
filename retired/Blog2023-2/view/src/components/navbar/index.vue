<template>
    <div class="navbar">
        <div class="icon">Barak Binyamin</div>
        <!-- <div class="tabs">
            <div @click="scroll('Contact')" class="tab">Contact </div>
            <div @click="scroll('Services')" class="tab">Services</div>
            <div @click="scroll('Blog')" class="tab">Blog    </div>
        </div> -->
        <div class="tabs">
            <menuSymbol class="tab" @toggled="toggleScroll"/>
        </div>

        <Transition>
            <div class="navMenu" v-if="showMenu"> 
                <div @click="scroll('Services')" class="menu-item">Services</div>
                <div @click="scroll('Blog')"     class="menu-item">Blog    </div>
                <div @click="scroll('Contact')"  class="menu-item">Contact </div>
            </div>
        </Transition>
    </div>
</template>

<script>
import menuSymbol from "./menuSymbol.vue"


export default{
    data(){
        return{
            showMenu: false
        }
    },
    components: {menuSymbol},
    methods: {
        async scroll(to){
            await new Promise(res=>setTimeout(res,250))
            document.getElementById(to).scrollIntoView({
                behavior: 'smooth'
            })
            // const at = Math.round(document.getElementById(to).getBoundingClientRect().top + document.documentElement.scrollTop)
            // let now = 0;
            // for (let i=0; i<100; i++){
            //     await new Promise(res=>setTimeout(res,10))
            //     now = now + Math.ceil(at/100)
            //     document.body.scrollTop = now
            //     document.documentElement.scrollTop = now
            // }
        },
        scrollToTop(){
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        toggleScroll(showMenu){
            this.showMenu = showMenu
            if(this.showMenu){
                document.body.style.overflowY = "hidden"
            }else{
                document.body.style.overflowY = "scroll"
            }
        }
    }
}
</script>

<style scoped>
.navbar{
    /* position             : sticky; */
    display              : grid;
    grid-template-columns: max-content auto;
    width                : 100%;
    height               : 65px;
    /* border-bottom        : 1px solid #464B4F; */
    /* box-shadow           : 2px 8px 0px 2px var(--second-bg-color) ; */
    /* background-color     : var(--second-bg-color); */
    color                : var(--main-font-color);
    overflow             : hidden;
    align-items          : center;
    font-weight          : bold;
    padding-left         : 10px;
    padding-right        : 20px;
}
.tabs{
    width                : 100%;
}
.icon{
    font-size  : var(--h1-font-size);
    font-family: var(--second-font-family);
    font-size  : 25px;
}
/* .icon:hover{
    opacity: .8;
    -webkit-user-select: none;
    -ms-user-select    : none;
    user-select        : none;
} */
.tab{
    display     : block;
    width       : max-content;
    text-align  : center;
    float       : right;

}
.tab:hover{
    opacity     : .8;
}

.navMenu{
    position        : fixed;
    display         : grid;
    top             : 65px;
    left            : 0px;
    height          : calc(100% - 65px);
    width           : 100%;
    background-color: var(--main-bg-color);
    align-content   : center  ;
    align-items     : center  ;
    grid-auto-rows  : max-content;
    justify-content : center;
    grid-row-gap    : 20px;
    padding-bottom  : 65px;
}

.menu-item{
    font-size: var(--big-font-size);
    height: min-content;
    font-weight: 900;
    text-align: center;
}
.menu-item:hover{
    opacity: .6;
    cursor : pointer;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>