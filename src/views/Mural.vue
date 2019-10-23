<template>
  <div>
    <Navbar />
    <div class="page-mural">
      <Button class="page-mural__button"> Nova Publicação </Button>
      <Mural v-for="item in getPublicacoes()" :key="item" :nomeMural="item.nome" :msgMural="item.msg" :dataMural="item.data" class="page-mural__user-content"/>
    </div>
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
  name: 'home',
  components: {
    Navbar,
    Mural,
    Button,
  },
  data: function () {
    return {
      items: ["oi", "oi", "ll"]
    }
  },
  methods: {
    getPublicacoes: function(){
      return [{nome: "Teste", msg: "teste", data:"Teste"}]
    }
  }
});



</script>
<style  scoped lang="scss">
.page-mural{
    padding: 10px 300px 0px 300px;

    &__button{
        margin-bottom: 25px;
        width: 125px;
    }
    &__user-content{
        margin-bottom: 10px;
    }
}
</style>
