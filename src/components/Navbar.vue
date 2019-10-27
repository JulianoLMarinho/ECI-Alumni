<template>
  <div class="navbar">
    <div class="navbar__title">ECIAlumni</div>
    <div class="navbar__options">
      <router-link :to="{ name: 'mural' }" class="button">Mural</router-link>
      <router-link :to="{ name: 'groups' }" class="button">Grupos</router-link>
      <router-link :to="{ name: 'profile' }" class="button">Perfil</router-link>
      <router-link :to="{ name: 'students' }" class="button">Alunos</router-link>
      <router-link :to="{ name: 'about' }" class="button">Sobre</router-link>
      <b-dropdown size="sm"  dropleft  variant="link" toggle-class="text-decoration-none" no-caret>
        <template v-slot:button-content>
          <Icon :size="72"></Icon>
        </template>
        <b-dropdown-item href="login">Sair</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from "vue";
import Icon from "@/components/Icon.vue";
export default Vue.extend({
  components: {
    Icon
  }
});
</script>

<style lang="scss" scoped>
.navbar {
  border-bottom: solid 1px #9b9491;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #707070;
  padding: 5px 35px 15px 35px;
  margin-bottom: 15px;
  &__options {
    display: flex;
    flex-direction: row;
    list-style: none;
    align-items: flex-end;
  }
  &__title {
    font-weight: normal;
    font-size: 62px;
    margin-top: 10px;
  }
}
.button {
  color: #707070;
  font-weight: bold;
  font-size: 20px;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    transition: all 0.5s ease;
    color: #ff8800;
  }
  &:active {
    transition: all 0.1s ease;
    color: #f8d92a;
  }
}
.router-link-active {
  color: #ff8800;
}
</style>
