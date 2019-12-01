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
    <StudentDetail :idUsuario="id" />
    </b-row>
      <b-modal ref="modal-editar" id="modal-1" centered title="Editar Usuário" >

        <b-alert :show="textoVazio" variant="danger">Não é possível fazer uma publicação vazia!</b-alert>


        <b-form-textarea style="margin-top: 10px"
                         id="textarea-rows"
                         placeholder="Digite a sua publicação"
                         rows="8"
                         v-model="input.resumoProfissional"
        ></b-form-textarea>
        <template v-slot:modal-footer="{ Cancelar, Enviar }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancelar
          </b-button>
          <b-button size="sm" variant="success" type="submit" @click="novoPost(input.textoPublicacao)">
            Enviar
          </b-button>
        </template>
      </b-modal>
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
  data: function () {
    return {
      id: JSON.parse(localStorage.getItem('user')||"").idUsuario,
      usuarioByIdUsuario: [],
      input: {
        resumoProfissional: ""
      }
    }
  }
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
