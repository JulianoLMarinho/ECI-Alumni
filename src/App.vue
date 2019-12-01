<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace></router-link>
    </div>
    <router-view @authenticated="setAuthenticated" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default Vue.extend({
  name: "App",
  data() {
    return {
      authenticated: false
    };
  },
  mounted() {
    // eslint-disable-next-line no-constant-condition
    console.log(this.$router.currentRoute);
    if(!this.authenticated && localStorage.getItem("user") == null){
      if(this.$router.currentRoute.name != "cadastro"){
        this.$router.replace({name: "login"})
      }
    } else {
      this.authenticated = true;
    }
  },
  methods: {
    setAuthenticated(status: boolean) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    }
  }
})
</script>

<style lang="scss">
#app {
  font-family: "Times New Roman",'Avenir', Helvetica, Arial, sans-serif;
  //-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

</style>
