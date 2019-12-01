<template>
  <div class="home">
    <Navbar />
    <StudentDetail :idUsuario="idUsuario" />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import StudentDetail from '@/components/StudentDetailComponent.vue';
export default  Vue.extend({
  name: 'studentDetail',
  components: {
    Navbar,
    StudentDetail,
  },
  props:["idUsuario"]
});
</script>
