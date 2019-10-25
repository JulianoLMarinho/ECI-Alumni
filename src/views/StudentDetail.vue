<template>
  <b-container fluid class="m0">
    <Navbar />
    <b-row>
      <b-col offset="3" md="3">
        <Icon size="150"></Icon>
      </b-col>
      <b-col md="3" class="dadoAluno">
        <h2>Nome do Aluno</h2>
        <h3>Formado em 2019</h3>
        <h4>emaildoaluno@poli.ufrj.br</h4>
      </b-col>
    </b-row>
    <b-row>
      <b-col offset="3" md="6" class="textoResumo">
        <h2>Resumo Profissional</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in
          felis eu orci aliquam maximus in sed diam. In porta pulvinar enim ut
          sodales. Sed posuere rhoncus libero eu vestibulum. Maecenas vestibulum
          auctor dui vitae luctus. Sed laoreet, felis a accumsan interdum, urna
          lorem ullamcorper massa, ut porttitor justo orci non metus. Donec
          placerat elementum blandit. Morbi aliquam libero ac hendrerit
          ultrices. Duis tincidunt ut dolor bibendum suscipit. Proin nec blandit
          ligula, non ullamcorper libero. Curabitur rhoncus efficitur dictum.
          Donec congue vitae elit ac condimentum. Praesent molestie interdum
          lacus, et congue justo venenatis et. Nulla vel dolor eget quam viverra
          egestas vel blandit odio. Pellentesque quis laoreet nulla. Aliquam nec
          felis mi. Morbi blandit magna ut tempor vehicula.
        </p>
        <p>
          Curabitur non lectus dignissim, maximus nulla ac, elementum turpis.
          Curabitur in dui vel ipsum porttitor pellentesque ac sit amet nisl.
          Curabitur ornare condimentum tellus a auctor. Curabitur consequat
          maximus ipsum sit amet molestie. Pellentesque a odio ac eros ornare
          varius. Morbi laoreet tortor non felis euismod tincidunt. Curabitur id
          nisi eget velit pharetra dignissim ut a lectus. Vestibulum scelerisque
          arcu sed metus congue elementum. Sed sit amet posuere augue. Proin
          gravida quam quis nibh sollicitudin, quis hendrerit enim bibendum.
          Praesent tellus tortor, malesuada sit amet aliquet quis, pretium ut
          lectus. Quisque et finibus libero. Morbi interdum luctus pharetra.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Mauris porta diam quam, sit amet bibendum elit
          suscipit quis.
        </p>
        <p></p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import Icon from "@/components/Icon.vue";

export default Vue.extend({
  name: "studentDetail",
  components: {
    Navbar,
    Icon
  }
});
</script>
<style scoped lang="scss">
.dadoAluno {
  text-align: right;
}
.textoResumo {
  text-align: justify;
}
</style>
