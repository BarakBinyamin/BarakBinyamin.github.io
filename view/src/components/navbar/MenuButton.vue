<template>
  <div>
    <div v-click-outside="unfocus" class="menu" @mousedown="state=!state" v-bind:class="{ selected : state }">
      <div class="menu-line"></div>
      <div class="menu-line"></div>
      <div class="menu-line"></div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MenuButton',
  data(){
    return{
      state: false
    }
  },
  methods: {
    unfocus(){
      this.state = false
    }
  },
  watch: {
    state: function () {
      this.$emit("toggled", this.state)
    },
  }
}
</script>

<style scoped>
.menu{
	width: 35px;
	height: 30px;
	justify-self: center;
	align-self: center;
	overflow: hidden;
  transition-duration: .3s;
  cursor: pointer;
}
.selected{
  transform: rotate(90deg);
}
.menu:hover{
	opacity: .8;
}
.menu-line{
  display: block;
  width: 30px;
  height: 4px;
  margin: 5px;
  background: #cdcdcd;
  border-radius: 3px;
}
</style>
