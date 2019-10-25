<template>
  <b-container fluid class="m0">
    <Navbar />
    <b-row>
      <b-col md="8" offset-md="2">
        <b-row>
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Pesquisar Alunos"
          ></b-form-input>
        </b-row>
        <b-row>
          <h3>Resultados</h3>
        </b-row>
        <b-row>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
          <StudentComponent></StudentComponent>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import StudentComponent from "@/components/StudentComponent.vue";
export default Vue.extend({
  name: "home",
  components: {
    Navbar,
    StudentComponent
  },

});
</script>
<style scoped lang="scss">
// .main-page{
//     //padding: 10px 300px 0px 300px;

//     &__button{
//         margin-bottom: 25px;
//         width: 125px;
//     }
//     &__user-content{
//         margin-bottom: 10px;
//     }
// }
</style>
