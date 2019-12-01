<template>
  <b-col md="3" class="student" v-on:click="clickStudent">
    <Icon :size="90"></Icon>
    <p style="margin-bottom: 0">{{studentName}}</p>
    <p>{{studentYear == 1970?"Ano não informado":"Formou em " + studentYear}}</p>
  </b-col>
</template>

<script lang="ts">
import Vue from "vue";
import Student from "@/models/Student";
import Icon from "@/components/Icon.vue";
export default Vue.extend({
  components: {
    Icon
  },
  props: ["studentName", "studentYear", "idUsuario"],
  methods: {
    getStudents: function() {
      let s = new Student({
        nome: "Juliano L Marinho",
        email: "julianomarinho@poli.ufrj.br",
        picture: "hj",
        graduateDate: "2019",
        profissionalResume: "hjkjk"
      });
      return s;
    },
    clickStudent: function() {
      //alert("foi");
      this.$router.push({name: "studentDetail", params: {idUsuario: this.idUsuario}});
    }
  }
});
</script>

<style lang="scss" scoped>
.student {
  text-align: center;
  margin: 0%;
}
</style>
