<template>
  <b-container fluid class="m0">
    <b-row>
      <b-col offset="3" md="3">
        <Icon :size="150"></Icon>
      </b-col>
      <b-col md="3" class="dadoAluno">
        <h2>{{usuarioByIdUsuario.nomeUsuario}}</h2>
        <h3>{{new Date(usuarioByIdUsuario.dataConclusaoCurso).getUTCFullYear() == 1970?"Ano não informado":"Formou em " + new Date(usuarioByIdUsuario.dataConclusaoCurso).getUTCFullYear()}}</h3>
        <h4>{{usuarioByIdUsuario.emailUsuario}}</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset="3" md="6" class="textoResumo">
        <h2>Resumo Profissional</h2>
        {{usuarioByIdUsuario.resumoProfissional?usuarioByIdUsuario.resumoProfissional:"Usuário ainda não informou o resumo profissional."}}
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import gql from "graphql-tag";
import Icon from "@/components/Icon.vue";
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
export default Vue.extend({
  name: "studentDetailComponent",
  components: {
    Icon,
  },
  props:["idUsuario"],
  apollo: {
    usuarioByIdUsuario: {
      query: gql`
        query UsuarioByIdUsuario($idDoUsuario: Int!){
          usuarioByIdUsuario(idUsuario: $idDoUsuario) {
            dataConclusaoCurso
            emailUsuario
            fotoPerfil
            nomeUsuario
            resumoProfissional
          }
        }
      `,
      variables() {
        return {idDoUsuario: this.idUsuario}
      },
    },
  },
  data: function(){
    return{
      usuarioByIdUsuario: [],
    }
  },
});
</script>
<style scoped lang="scss">
.dadoAluno {
  text-align: right;
}
.textoResumo {
  text-align: justify;
}
</style>
