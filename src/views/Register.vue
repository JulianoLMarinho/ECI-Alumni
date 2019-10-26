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
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="csenha">Digite novamente a sua senha:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input id="csenha" type="password"></b-form-input>
      </b-col>
    </b-row>
      <b-row style="font-family: sans-serif;">
          <b-col md="4" offset="4">
              <label for="nome">Digite o seu nome:</label>
          </b-col>
          <b-col md="4" offset="4">
              <b-form-input id="nome" type="text"></b-form-input>
          </b-col>
      </b-row>
      <b-row style="font-family: sans-serif;">
          <b-col md="4" offset="4">
              <label for="ano">Digite o ano em que você se formou:</label>
          </b-col>
          <b-col md="4" offset="4">
              <b-form-input id="ano" type="number"></b-form-input>
          </b-col>
      </b-row>
      <b-row style="font-family: sans-serif; text-align: justify; margin-top: 15px">
          <b-col md="4" offset="4">

          </b-col>
          <b-col md="4" offset="4">
              <small>Será necessário preencher outras informações em seu primeiro acesso.</small>
          </b-col>
      </b-row>
    <b-row style="margin-top: 10px">
      <b-col md="2" offset="4">
        <b-button variant="danger" href="login">Cancelar</b-button>
      </b-col>
      <b-col md="2" style="text-align: right">
        <b-button variant="success" href="login">Criar Usuário</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";

export default Vue.extend({
  name: "cadastro",
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
