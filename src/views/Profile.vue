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
    <StudentDetail :studentName="student.name" :studentYear="student.year"/>
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
  name: 'profile',
  components: {
    Navbar,
    Button,
    StudentDetail,
  },
  data: function(){
    return{
      student:{name:"Me", id:1, year:"2020"},
      
    }
  },
});
</script>
<style  scoped lang="scss">

.button{
        margin-bottom: 25px;
        width: 55px;
}
</style>