<template>
  <div class="home">
    <Navbar />
    <StudentDetail />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import StudentDetail from '@/components/StudentDetailComponent.vue';
export default  Vue.extend({
  name: 'home',
  components: {
    Navbar,
    StudentDetail,
  }
});
</script>
