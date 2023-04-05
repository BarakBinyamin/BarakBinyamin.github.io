<template>
  <defaults/>
  <router-view />
  <bottom/>
</template>

<script>
import defaults from './components/defaults.vue'
import bottom from './components/footer.vue'

export default{
  components: {defaults, bottom}
}
</script>

<style>
</style>
