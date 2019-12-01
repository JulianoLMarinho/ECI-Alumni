<template>
<div>
  <Navbar />
  <b-container fluid class="m0">
    <b-row>
      <b-col md="8" offset-md="2">
        <b-row>
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Pesquisar Alunos"
            v-on:input="search"
            v-model="pesquisaNome"
          ></b-form-input>
        </b-row>
        <b-row>
          <h3 style="margin: 5px 0 15px">Resultados</h3>
        </b-row>
        <b-row>
          <StudentComponent v-for="student in searchUsuarios.nodes" :idUsuario="student.idUsuario" :key="student.idUsuario" :studentName="student.nomeUsuario" :studentYear="new Date(student.dataConclusaoCurso).getUTCFullYear()"/>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import gql from 'graphql-tag';
import StudentComponent from "@/components/StudentComponent.vue";
export default Vue.extend({
  name: "student",
  components: {
    Navbar,
    StudentComponent
  },
  apollo: {
    searchUsuarios: {
      query: gql`
        query searchUsuarios($nomeUsuario: String){
          searchUsuarios(search: $nomeUsuario){
            nodes{
              nomeUsuario
              idUsuario
              dataConclusaoCurso
            }
          }
        }`,
      variables() {
        return {nomeUsuario: this.nomeUsuario}
      }
    }
  },
  data: function () {
    return {
      searchUsuarios:[],
      nomeUsuario: "",
      pesquisaNome: "",
    }
  },
  methods: {
    search(){
        this.nomeUsuario = this.pesquisaNome;
    }
  }
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
