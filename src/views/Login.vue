<template>
  <b-container>
    <b-row>
      <b-col md="4" offset="4" class="title">
        ECI Alumni
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="email">Digite o seu email:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input id="email" type="email"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="senha">Digite a sua senha:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input id="senha" type="password"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="margin-top: 10px">
      <b-col md="2" offset="4"> </b-col>
      <b-col md="2" style="text-align: right">
        <b-button variant="success" href="mural">Login</b-button>
      </b-col>
    </b-row>
    <b-row style="text-align: center; margin-top: 10px">
      <b-col md="4" offset="4">
        <p>
          Ainda não é cadastrado? <br />
          <a href="#">Junte-se à comunidade ECI Alumni</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  name: "login",
  components: {},
  data() {
    return {
      types: ["email", "password"]
    };
  }
});
</script>
<style scoped lang="scss">
.title {
  font-weight: normal;
  font-size: 62px;
  margin-top: 10px;
  text-align: center;
}
</style>
