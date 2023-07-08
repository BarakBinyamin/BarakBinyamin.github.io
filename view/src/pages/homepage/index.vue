<template>
    <div class="welcome-container">
        <div class="welcome">
            <h1>Welcome to <router-link to="/">Rocky.dev</router-link>!</h1><br>
            <!-- <img class="foo" src="/site-images/banner.jpeg"/><br> -->
            <br><h2>This site is currently in construction, please send any suggestions to bb5369@g.rit.edu</h2><br><br>

            Here you'll find some posts about cool tech I run into,
            my favorite music, and some other stuff I like to write down<br><br>

            There's also a <router-link to="/Store">store</router-link>  where you can buy cool stuff and support my projects<br><br>

            <a href="#posts">Posts below ↓</a>
        </div>
    </div>
    <div id="posts" class="posts">
        <router-link v-for="i in 20" to="/Posts/aa">
            <div class="post-link">
                <div>title</div>
                <div>created</div>
            </div>
        </router-link>
    </div>
    <!-- <div @click="topFunction" v-if="showBackToTop" class="to-top">↑</div> -->

</template>

<script>
export default{
    data(){
        return {
            showBackToTop: false
        }
    },
    mounted(){
        // window.onscroll = this.scrollFunction
    },
    methods:{
        topFunction() {
            document.body.scrollTop = -10;
            document.documentElement.scrollTop = -10;
        },
        scrollFunction() {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                this.showBackToTop = true
            } else {
                this.showBackToTop = false
            }
        }
    }
}
</script>
<style scoped>
.welcome-container{
    display: grid;
    width: 100%;
    padding: 10px;
}

.welcome{
    width: 100%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
}

.posts{
    margin-top   : 10px;
    display      : grid;
    width        : 100%;
    justify-items: center;
    justify-content: center;

    grid-gap     : 15px;
    margin       : 0px;
    padding      : 0px;
    grid-template-columns: repeat(auto-fit, 350px)
}

.post-link{
    display      : grid;
    align-items  : center;
    justify-items: left;
    overflow     : hidden;
    width        : 350px;
    height       : 75px;
    background   : var(--second-bg-color);
    border-radius: 5px;
    padding      : 5px;
    color        :  var(--main-font-color);
}

.post-link:hover{
    opacity        : .8;
}

.to-top{
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    background-color: var(--main-font-color);
    color: white;
    cursor: pointer;
    height: 35px;
    width: 35px;
    border-radius: 50%;
    text-align: center;
    align-self: center;
    justify-self: center;
    font-size: 1.5em;
    overflow: hidden;
}

.to-top:hover{
    opacity: .8;
}


@media (any-pointer: coarse)  {
    .to-top{
        bottom: 60px;
        height: 45px;
        width: 45px;
        right: 10px;
    }
} 
</style>