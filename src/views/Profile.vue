<template>
  <div class="home">
    <Navbar />
    <b-container fluid class="m0">
      <b-row>
        <b-col offset="8" md="1">
    <Button class="button"> Editar </Button>
        </b-col>
      </b-row>
    <b-row>
    <StudentDetail />
    </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import StudentDetail from '@/components/StudentDetailComponent.vue';
import Navbar from '@/components/Navbar.vue';
import Button from '@/components/Button.vue';
export default  Vue.extend({
  name: 'home',
  components: {
    Navbar,
    Button,
    StudentDetail,
  }
});
</script>
<style  scoped lang="scss">
.home{
  
}
.button{
        margin-bottom: 25px;
        width: 55px;
}
</style>