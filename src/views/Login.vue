<template>

  <b-container>
    <b-row>
      <b-col md="4" offset="4" class="title">
        ECI Alumni
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <b-alert :show="erroAlert" variant="danger">Email e/ou senha incorretos!</b-alert>
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
import gql from 'graphql-tag';
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);


export default Vue.extend({
  name: "login",
  components: {},
  data() {
    return {
      types: ["email", "password"],
      input: {
        email: "",
        password: ""
      },
      erroAlert: false
    };
  },
  
  methods: {
    login() {

      let loader = this.$loading.show({color: "#FF8800"});
        let teste = this.$apollo.query({
          query: gql`query allUsuarios($emailUsuario: String, $senhaUsuario: String) {
          allUsuarios(condition: {emailUsuario:$emailUsuario, senhaUsuario: $senhaUsuario}){
              nodes {
                      nomeUsuario
                      idUsuario
                      emailUsuario
                      fotoPerfil
                    }
                }}`,
          variables: {
            emailUsuario: this.input.email,
            senhaUsuario: this.input.password
          }
        }).then(data => {
          if(data.data.allUsuarios.nodes.length ==1){
            this.$emit("authenticated", true);
            localStorage.setItem("user", JSON.stringify(data.data.allUsuarios.nodes[0]));
            this.$router.replace({name: "mural"})
            loader.hide();
          } else {
            this.erroAlert = true;
            loader.hide();
          }
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
