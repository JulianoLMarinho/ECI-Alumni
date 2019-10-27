<template>
  <div>
  <Navbar />
  <div class="about">
  <p class="about__title">ECIAlumni</p>
  <div class="about__content">
    <p>O projeto ECI Alumni surgiu da necessidade de um contato maior entre ex-alunos do curso de Engenharia de Computação e Informação da UFRJ.
    Com o ECI Alumni, os usuários (ex-alunos) poderão trocar experiências ou promover encontros de turmas de forma fácil e descomplicada. 
      Além disso, alunos atuais poderão conhecer mais o que a carreira pós ECI espera.</p>
    <p>Projeto realizado para a disciplina de Qualidade de Software da UFRJ pelo grupo:</p>
    <ul><li>Anna Gabrielle L. P. Homem</li>
      <li>Jonathan Alcantara</li>
      <li>Juliano Marinho</li>
      </ul>
  </div>
  </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Navbar from '@/components/Navbar.vue';
export default  Vue.extend({
  name: 'About',
  components: {
    Navbar,
  }
});
</script>

<style  scoped lang="scss">
.about{
   padding: 10px 300px 0px 300px;
   &__content{
   text-align: justify;
   font-size: large;
  }
   &__title{
      text-align: center;
      font-weight: normal;
    font-size: 62px;
    margin-top: 10px;
   }
}
</style>

