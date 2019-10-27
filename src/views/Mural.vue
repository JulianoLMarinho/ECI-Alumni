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
      <Mural v-for="item in items" :key="item.id" :nomeMural="item.name" :msgMural="item.msg" :dataMural="item.data" class="page-mural__user-content"/>
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
          <b-button size="sm" variant="success" @click="ok()">
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
export default  Vue.extend({
  name: 'mural',
  components: {
    Navbar,
    Mural,
    Button,
  },
  data: function () {
    return {
      items:[
        {name:'Juliano', id:1, msg:"Olha isso!" , data:"2 de setembro de 2019"},
        {name:'Anna', id:2,msg:"Novo emprego", data:"3 de outubro de 2019"},
        {name:'Jonathan', id:3, msg:"Nova oportunidade" , data:"4 de novembro de 2019"},
        {name:'Gabrielle', id:4, msg:"É isso ai! :D " , data:"5 de dexembro de 2019"},
      ]
    }
  },
  methods: {
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
