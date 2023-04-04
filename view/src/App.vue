<template>
  <defaults/>
  <router-view />
  <navbar/>
</template>

<script>
import defaults from './components/defaults.vue'
import navbar from './components/navbar.vue'

export default{
  components: {defaults, navbar}
}
</script>

<style>
</style>
