<template>
  <div>
    <navbar/>
    <br>
    <router-view />
    <sizeAndColor @resize="console.log('resive event')"/>
  </div>
</template>

<script>
import sizeAndColor from './components/sizeAndColor.vue'
import bottom       from './components/footer.vue'
import navbar       from './components/navbar/index.vue'

export default{
  components: {sizeAndColor, navbar, bottom},
}
</script>

<style>
</style>
