<template>
  <navbar/>
  <br>
  <router-view />
  <defaults/>
  <bottom/>
</template>

<script>
import defaults from './components/defaults.vue'
import bottom   from './components/footer.vue'
import navbar   from './components/navbar/index.vue'

export default{
  components: {defaults, navbar, bottom}
}
</script>

<style>
/* html{
  background-image: url('cool.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
} */

</style>
