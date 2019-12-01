<template>
  <b-container>
    <b-row>
      <b-col md="4" offset="4" class="title">
        ECI Alumni
      </b-col>
    </b-row>
      <b-row>
          <b-col md="4" offset="4">
              <b-alert :show="erroCadastro" variant="danger">Não é possível fazer uma publicação vazia!</b-alert>
          </b-col>
      </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="email">Digite o seu email:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input :state="val.emailUsuario" v-on:input="validarEmail" v-model="input.emailUsuario" id="email" type="email"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="senha">Digite a sua senha:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input :state="val.senhaUsuario" v-on:id="validarSenha" v-model="input.senhaUsuario" id="senha" type="password"></b-form-input>
      </b-col>
    </b-row>
    <b-row style="font-family: sans-serif;">
      <b-col md="4" offset="4">
        <label for="csenha">Digite novamente a sua senha:</label>
      </b-col>
      <b-col md="4" offset="4">
        <b-form-input :state="val.confimacaoSenha" v-on:input="validarSenha" v-model="input.confimacaoSenha" id="csenha" type="password"></b-form-input>
      </b-col>
    </b-row>
      <b-row style="font-family: sans-serif;">
          <b-col md="4" offset="4">
              <label for="nome">Digite o seu nome:</label>
          </b-col>
          <b-col md="4" offset="4">
              <b-form-input :state="val.nomeUsuario" v-model="input.nomeUsuario" id="nome" type="text"></b-form-input>
          </b-col>
      </b-row>
      <b-row style="font-family: sans-serif;">
          <b-col md="4" offset="4">
              <label for="ano">Digite o ano em que você se formou:</label>
          </b-col>
          <b-col md="4" offset="4">
              <b-form-input id="ano" :state="val.anoConclusao" v-model="input.anoConclusao" type="number"></b-form-input>
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
        <b-button variant="success" @click="registrarUsuario">Criar Usuário</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import Vue from "vue";
import gql from 'graphql-tag';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading);

export default Vue.extend({
  name: "cadastro",
  components: {},
  data() {
    return {
      input: {
          nomeUsuario: "",
          emailUsuario: "",
          senhaUsuario: "",
          confimacaoSenha: "",
          anoConclusao: null
      },
        erroCadastro: false,
        val: {
            nomeUsuario: null,
            emailUsuario: null,
            senhaUsuario: null,
            confimacaoSenha: null,
            anoConclusao: null
        }
    };
  },
    methods: {
      registrarUsuario(){
          let loader = this.$loading.show({color: "#FF8800"});
          if(this.input.nomeUsuario.length == 0){
              this.val.nomeUsuario = false;
          } else {
              this.val.nomeUsuario = true;
          }

          if (this.input.emailUsuario.length == 0){
              this.val.emailUsuario = false;
          }
          if(this.input.anoConclusao == null){
              this.val.anoConclusao = false;
          } else {
              this.val.anoConclusao = true;
          }

          if(this.input.senhaUsuario.length == 0){
              this.val.senhaUsuario = false;
          } else {
              this.val.senhaUsuario = true;
          }
            this.validarSenha();
          debugger;
          if(this.val.nomeUsuario === true && this.val.anoConclusao === true && this.val.senhaUsuario === true && this.val.emailUsuario === true && this.val.confimacaoSenha === true) {
              this.$apollo.mutate({
                  mutation: gql`
                mutation createUsuario($nomeUsuario: String!, $emailUsuario: String!, $senhaUsuario: String!, $dataConclusao: Date){
                    createUsuario(input: {usuario: {nomeUsuario: $nomeUsuario, emailUsuario: $emailUsuario, senhaUsuario:$senhaUsuario, dataConclusaoCurso: $dataConclusao}}){
                        usuario {
                          nomeUsuario
                          idUsuario
                        }
                    }
                }
              `,
                  variables:{

                      nomeUsuario: this.input.nomeUsuario,
                      emailUsuario: this.input.emailUsuario,
                      senhaUsuario: this.input.senhaUsuario,
                      dataConclusao: new Date("01-01-"+this.input.anoConclusão)

                  }}).then(data => {
                  loader.hide();
                  this.$router.replace({name: "login"})

              }).catch(erro => {
                  loader.hide();

              })
          }
      },
        validarEmail(){
          if(this.input.emailUsuario.length > 0){
              this.$apollo.query({
                  query: gql`
                query usuarioByEmailUsuario($emailUsuario: String!){
                    usuarioByEmailUsuario(emailUsuario: $emailUsuario){
                        nomeUsuario
                    }
                }
              `,
                  variables: {
                      emailUsuario: this.input.emailUsuario
                  }
              }).then(data => {
                  console.log(data.data.usuarioByEmailUsuario)
                  if(data.data.usuarioByEmailUsuario != null){
                      this.val.emailUsuario = false
                  } else {
                      this.val.emailUsuario = true
                  }
              })
          } else {
              this.val.emailUsuario = null
          }

        },
        validarSenha(){
          if(this.input.senhaUsuario != this.input.confimacaoSenha || this.input.confimacaoSenha.length == 0){
              this.val.confimacaoSenha = false;
          } else {
              this.val.confimacaoSenha = true;
          }
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
