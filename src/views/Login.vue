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
        <b-form-input v-model="input.email" id="email" type="email"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="senha">Digite a sua senha:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input id="senha" v-model="input.password" type="password"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="margin-top: 10px">
      <b-col md="2" offset="4"> </b-col>
      <b-col md="2" style="text-align: right">
        <b-button variant="success" v-on:click="login()">Login</b-button>
      </b-col>
    </b-row>
    <b-row style="text-align: center; margin-top: 10px">
      <b-col md="4" offset="4">
        <p>
          Ainda não é cadastrado? <br />
          <a href="cadastro">Junte-se à comunidade ECI Alumni</a>
        </p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import gql from 'graphql-tag'

export default Vue.extend({
  name: "login",
  components: {},
  data() {
    return {
      types: ["email", "password"],
      input: {
        email: "",
        password: ""
      }
    };
  },
  
  methods: {
    login() {
        let teste = this.$apollo.query({
          query: gql`query allUsuarios($emailUsuario: String, $senhaUsuario: String) {
          allUsuarios(condition: {emailUsuario:$emailUsuario, senhaUsuario: $senhaUsuario}){
              nodes {
                      nomeUsuario
                    }
                }}`,
          variables: {
            emailUsuario: this.input.email,
            senhaUsuario: this.input.password
          }
        }).then(data => {
          this.$emit("authenticated", true);
          this.$router.replace({name: "mural"})
        })

      }
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
