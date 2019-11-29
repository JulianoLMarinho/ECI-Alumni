<template>
  <div>
    <Navbar />
    <b-container fluid class="m0">
      <b-row>
        <b-col md="6" offset="2">
        </b-col>
       <b-col md="2">
      <Button class="page-mural__button" v-b-modal.modal-1> Nova Publicação </Button>
       </b-col>
      </b-row>
      <b-row>
        <b-col md="8" offset="2">
      <Mural v-for="item in allMurals.nodes" :key="item.idPublicacao" :nomeMural="item.usuarioByIdUsuario.nomeUsuario" :msgMural="item.textoPublicacao" :dataMural="item.dataPublicacao" class="page-mural__user-content"/>
     </b-col>
      </b-row>
     <b-modal id="modal-1" centered title="Nova Publicação">

        <b-form-textarea style="margin-top: 10px"
                id="textarea-rows"
                placeholder="Digite a sua publicação"
                rows="8"
        ></b-form-textarea>
        <template v-slot:modal-footer="{ Cancelar, Enviar }">
          <!-- Emulate built in modal footer ok and cancel button actions -->
          <b-button size="sm" variant="danger" @click="cancel()">
            Cancelar
          </b-button>
          <b-button size="sm" variant="success" @click="novoPost('Teste com o botão')">
            Enviar
          </b-button>
        </template>
      </b-modal> 
    
    </b-container>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
import Button from '@/components/Button.vue';
import Mural from '@/components/MuralComponent.vue';
import ItemMural from '../models/itemMural';
import gql from 'graphql-tag'

export default  Vue.extend({
  name: 'mural',
  components: {
    Navbar,
    Mural,
    Button,
  },
    apollo: {
        allMurals: gql`
        query {
            allMurals{
                nodes {
                      idPublicacao
                      dataPublicacao
                      textoPublicacao
                      usuarioByIdUsuario {
                        idUsuario
                        nomeUsuario
                        emailUsuario
                      }
                    }
                }
        }
      `
    },

  data: function () {
    return {
        allMurals: []
    }
  },

  methods: {
      novoPost(textoPublicacao: string){
          this.$apollo.mutate({
              mutation: gql`
              mutation {
                      createMural(input: {mural: {textoPublicacao: "TESTE", idUsuario: 2}}) {
                        mural {
                          idPublicacao
                          textoPublicacao
                          dataPublicacao
                          usuarioByIdUsuario {
                            nomeUsuario
                            idUsuario
                            emailUsuario
                          }
                        }
                      }
                    }
              `,
              variables: {
                  textoPublicacao: textoPublicacao,
                  idUsuario: 1
              }
          })
      }
  }
});



</script>
<style  scoped lang="scss">
.page-mural{
    

    &__button{
        margin-bottom: 25px;
        width: 125px;
    }
    &__user-content{
        margin-bottom: 10px;
    }
}
</style>
