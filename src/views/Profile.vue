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
    <StudentDetail :studentName="usuarioByIdUsuario.nomeUsuario" :studentYear="usuarioByIdUsuario.dataConclusaoCurso.slice(0, 4)"/>
    </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import StudentDetail from '@/components/StudentDetailComponent.vue';
import Navbar from '@/components/Navbar.vue';
import gql from 'graphql-tag';
import Button from '@/components/Button.vue';
export default  Vue.extend({
  name: 'profile',
  components: {
    Navbar,
    Button,
    StudentDetail,
  },
  
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
        return {idDoUsuario: JSON.parse(localStorage.getItem('user')||"").idUsuario,}
      },
    },
  },
  data: function(){
    return{
      usuarioByIdUsuario: [],
    }
  },
  // beforeCreate(){
    
  //   const usuarioId = JSON.parse(localStorage.getItem('user')||"").idUsuario;
  //   console.log(usuarioId);
  // }
  
});
</script>
<style  scoped lang="scss">

.button{
        margin-bottom: 25px;
        width: 55px;
}
</style>