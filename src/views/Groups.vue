<template>
  <div class="home">
    <Navbar />
    <b-container fluid class="m0">
      <b-row>
        <b-col md="6" offset="2">
        </b-col>
        <b-col md="2">
          <Button class="button" v-b-modal.modal-1> Nova Mensagem </Button>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset="2">
          <h2 style="margin-bottom:15px">Grupos Cadastrados</h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col offset="2" md="8" style="text-align: left">
          <div role="tablist">
            <b-card v-for="group in allGrupoemails.nodes" :key="group.idGrupoEmail" no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="btn-collapse"  block href="#"  v-b-toggle="'accordion-' + group.idGrupoEmail" variant="info" methods="getUsersInfoGroup(idDoGrupo)">{{group.nomeGrupoEmail}} - {{group.grupoemailusuariosByIdGrupoEmail.totalCount}} participantes </b-button>
              </b-card-header>
              <b-collapse :id="'accordion-'+ group.idGrupoEmail" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text v-for="user in group.grupoemailusuariosByIdGrupoEmail.nodes" :key="user.idUsuario">{{user.usuarioByIdUsuario.nomeUsuario}} <br></b-card-text>
                  <b-button v-show="usuarioNaoNoGrupo" size="sm" variant="success" @click="cadastroGrupo(group.idGrupoEmail)"> Participar</b-button>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>

      <b-modal ref="modal-1" id="modal-1" centered title="Nova Mensagem">

        <b-form-select v-model="selected" :options="options" size="sm" class="mt-3"></b-form-select>
        <b-form-textarea style="margin-top: 10px"
                id="textarea-rows"
                placeholder="Digite a sua mensagem"
                rows="8"
        ></b-form-textarea>
        <template v-slot:modal-footer="{ Cancelar, Enviar }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancelar
          </b-button>
          <b-button size="sm" id="botaoEnviar" variant="success" @click="ok()">
            Enviar
          </b-button>
           <b-popover target="botaoEnviar" variant="danger" triggers="focus">
            <template v-slot:title>Parece que não vai ser desta vez...</template>
            Esta função não foi implementada ainda :(
          </b-popover>
        </template>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import gql from 'graphql-tag';
import Button from '@/components/Button.vue';

export default  Vue.extend({
  name: 'groups',
  components: {
    Navbar,
    Button,
  },
   apollo: {
        allGrupoemails: gql`
        query {
          allGrupoemails{
            nodes {
              idGrupoEmail
              nomeGrupoEmail
              grupoemailusuariosByIdGrupoEmail {
                nodes {
                  usuarioByIdUsuario {
                    nomeUsuario
                    idUsuario
                  }
                }
                totalCount
              }
            }
          }
        }
      `,
    },
  data() {
    return {
      allGrupoemails:[],
      selected: null,
      usuarioNaoNoGrupo: true,
    }
  },
  methods:{
    cancel() {
        this.$refs['modal-1'].hide();
      },
    cadastroGrupo(id){
        let loader = this.$loading.show({color: "#FF8800"});
        let user = JSON.parse(localStorage.getItem('user')||"")
        this.$apollo.mutate({
              mutation: gql`
              mutation CreateGrupoemailUsuario($idUsuario: Int!, $idDoGrupoEmail: Int!){
                createGrupoemailusuario(input: {grupoemailusuario: {idUsuario: $idUsuario, idGrupoEmail:  $idDoGrupoEmail}}) {
                  grupoemailByIdGrupoEmail {
                    idGrupoEmail
                  }
                  usuarioByIdUsuario {
                    idUsuario
                    nomeUsuario
                    emailUsuario
                  }
                }
              }
            `,
            variables: {
                idDoGrupoEmail: id,
                idUsuario: user.idUsuario,
              }
        }).then(data => {
              let grupoemailusuario = data.data.createGrupoemailusuario.grupoemailusuario;
              loader.hide();
              document.location.reload(true);
          }).catch(erro => {
              loader.hide();
          })
    },
  },
});
</script>
<style  scoped lang="scss">
 .btn-collapse{
   text-align: left;
   color: #707070;
   background-color: #ffffff00;
   border-color: #ffffff00;
   }

  .button{
    width: 125px;
  }
</style>
