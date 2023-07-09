<template>
	<transition name="dropdown">
        <div class="contianer" v-if="show && window.width<600">
            <router-link active-class="selected" class="navigation-link" 
                v-for="link in links" :key="link" :to="`/${link}`">
                {{link}}
            </router-link>
        </div>
	</transition>
</template>

<script>

export default {
    name: 'dropdown',
    props : ['links', 'show'],
        data() {
        return {
            window: {
                width: 0,
                height: 0
            },
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;
        }
    },
}
</script>

<style scoped>
.contianer{
	z-index:20;
	position: absolute;
	padding: 5px 0px 5px 0px;
	display: grid;
	grid-template-columns: auto;
    grid-gap: 2px;
	width: 100%;
	overflow: hidden;
	background: #24292f;
	font-size: 16px;
    transform-origin: top;
    border-top: solid;
    border-color: rgba(0,0,0,.2);
    border-width: 1px;
    box-shadow: 0 6px 4px -2px rgba(0,0,0,.2);

}
.dropdown-leave-active,.dropdown-enter-active {
  transition: .3s;
}
.dropdown-leave-to {
  transform: scaleY(0);
}
.dropdown-enter-from {
    transform: scaleY(0);
}

.navigation-link{
    padding: 5px 10px 5px 10px;
    -webkit-user-select: none; /* Safari */        
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */ 
    align-self: center; /* vertical center in grid */
    text-decoration: none;
    /* color: #f0f6fc; */
    font-weight: bold;
    background: #24292f;
    font-size: 20px;
}
.navigation-link:hover{
    cursor: pointer;
    opacity: .6;
}
.selected{
    opacity: .6;
}

</style>
