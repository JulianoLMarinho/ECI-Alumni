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
          ></b-form-input>
        </b-row>
        <b-row>
          <h3 style="margin: 5px 0 15px">Resultados</h3>
        </b-row>
        <b-row>
          <StudentComponent v-for="student in students" :key="student.id" :studentName="student.name" :studentYear="student.year"/>
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
import StudentComponent from "@/components/StudentComponent.vue";
export default Vue.extend({
  name: "student",
  components: {
    Navbar,
    StudentComponent
  },
  data: function () {
    return {
      students:[
        {name:'Juliano', id:1, year:2019},
        {name:'Anna', id:2, year:2018},
        {name:'Jonathan', id:3, year:2017 },
        {name:'Gabrielle', id:4, year:2016 },
        {name:'Marinho', id:5, year:2015}
      ]
    }
  },
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
