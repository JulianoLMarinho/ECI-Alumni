<template>
  <div>
  <Navbar />
  About
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
export default  Vue.extend({
  name: 'About',
  components: {
    Navbar,
  }
});
</script>

<style  scoped lang="scss">

</style>

