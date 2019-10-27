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
            <b-card v-for="group in groups" :key="group.id" no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="btn-collapse"  block href="#"  v-b-toggle="'accordion-' + group.id" variant="info">{{group.name}} - {{group.inGroup}} participantes</b-button>
              </b-card-header>
              <b-collapse :id="'accordion-'+ group.id" accordion="my-accordion" role="tabpanel">
                <b-card-body>
                  <b-card-text>Primeiro Nome <br> Outro Nome</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>

      <b-modal id="modal-1" centered title="Nova Mensagem">

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
          <b-button size="sm" variant="success" @click="ok()">
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
import Navbar from '@/components/Navbar.vue';
import Button from '@/components/Button.vue';

export default  Vue.extend({
  name: 'groups',
  components: {
    Navbar,
    Button,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Selecione o grupo para enviar a mensagem...' },
        { value: 'a', text: 'Nome do Grupo' },
        { value: 'b', text: 'Nome do Grupo' },
        { value: 'c', text: 'Nome do Grupo' }
      ],
      groups:[
        {name:'Group Name 1', id:1, inGroup:12},
        {name:'Group Name 2', id:2, inGroup:2},
        {name:'Group Name 3', id:3, inGroup: 5},
        {name:'Group Name 4', id:4, inGroup:52},
      ],
    }
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
