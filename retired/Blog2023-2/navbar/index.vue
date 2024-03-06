<template>
    <div :class="colorScheme">
        <!--Full layout-->
        <div v-if="window.width>=600" class="navbar navbar-full-layout">
            <!-- <img class="logo2" src="/site-images/logo.png"> -->
            <router-link class=" navigation-link" to="/"> 
                Barak Binyamin
            </router-link>
            <div class="empty-buffer-space"/>
       
         
          <router-link 
                v-for="link in LinksRight" :key="link" 
                class="navigation-link" :to="`/${link}`" 
                active-class="selected"
            >        
                {{link}}
            </router-link>
        </div>
        <!-- End Full layout-->

        <!--Condensed layout-->
        <div v-if="window.width<600" class="navbar navbar-condensed-layout">
            <router-link class="navigation-link" to="/"> 
                Barak Binyamin
            </router-link>
            <div class="empty-buffer-space"/>
            <MenuButton class="menu" v-on:toggled="toggleDropdown">
            </MenuButton>
        </div>
        <Dropdown :show="showDropdown" :links="LinksRight"></Dropdown>
        <!-- End Condensed layout-->

    </div>
</template>

<script>
import Dropdown from "./Dropdown.vue"
import MenuButton from "./MenuButton.vue"

const LinksRight=[ "Blog", "Services", "Contact"]
export default {
    name: 'navbar',
    props : ['links'],
    components: { Dropdown, MenuButton},
    data() {
        return {
            window: {
                width: 0,
                height: 0
            },
        LinksRight: LinksRight,
        darkMode: false,
        showDropdown: false,
        colorScheme: "light"
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth
            this.window.height = window.innerHeight
        },
        toggleMode(toggleState){
            this.darkMode=toggleState;
            if (this.darkMode){
                this.$globalColorScheme.value = "dark"
            }else{
                this.$globalColorScheme.value = "light"
            }
        },
        toggleDropdown(state){
            this.showDropdown=state
        }
    },
    watch : {
        '$globalColorScheme':{
            handler: function () {
                this.colorScheme = this.$globalColorScheme.value
        }, deep: true } 
    }
}
</script>

<style scoped>

.navbar{
    width: 100%;
    height: 60px;
    position: relative;
    border-bottom: 1px solid lightgrey;
}

.logo2{
    display: inline-block;
    margin-left: 10px;
    height: 25px;
    width: 25px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    justify-self: left;/* hrozontal center in grid */
}
.logo{
    height: 40px;
    width: 40px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    justify-self: left;/* hrozontal center in grid */
}
.navigation-link{
    padding-left: 10px;
    padding-right: 10px;
    font-size: 20px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    text-decoration: none;
    /* color: #f0f6fc; */
    font-weight: bold;
    height: 100%;
    overflow: hidden;
}
.selected{
    text-decoration: underline;
}
.navigation-link:hover{
    cursor: pointer;
    opacity: .6;
}
.navbar-full-layout{
	margin: 0px 50px 0px 0px;
    padding: 0px 10px 0px 0px; /* Up Right Down Left */
    display: grid;
    grid-template-columns: 250px auto  min-content min-content min-content;
    grid-gap: 10px;
    height: 60px;
    width:100%;
    overflow: hidden;
    align-content: center;
}
.navbar-condensed-layout{
    display: grid;
    grid-template-columns: 250px auto 60px;
    align-items: center;
    align-content: center;
    width:100%;
}
.toggle-container{
    justify-self: center;
    align-self: center;
}
</style>
