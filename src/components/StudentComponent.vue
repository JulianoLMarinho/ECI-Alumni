<template>
  <b-col md="3" class="student" v-on:click="clickStudent">
    <Icon size="90"></Icon>
    <p style="margin-bottom: 0">{{ getStudents().Nome }}</p>
    <p>Formou em 2019</p>
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
      this.$router.push({path: "alunoDetalhe", params: {t: this.getStudents().Nome}});
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
