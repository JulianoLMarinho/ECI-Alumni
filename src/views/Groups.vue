<template>
  <div class="home">
    <Navbar />
    Grupos
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
export default  Vue.extend({
  name: 'home',
  components: {
    Navbar,
  }
});
</script>
<style  scoped lang="scss">

</style>