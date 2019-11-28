import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Groups from "../views/Groups.vue";
import Profile from "../views/Profile.vue";
import Students from "../views/Students.vue";
import Mural from "../views/Mural.vue";
import StudentDetail from "../views/StudentDetail.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(Router);
Vue.use(BootstrapVue);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "./",
      name: "login",
      component: Login
    },
    {
      path: "/sobre",
      name: "about",
      component: About
    },
    {
      path: "/grupos",
      name: "groups",
      component: Groups
    },
    {
      path: "/alunos",
      name: "students",
      component: Students
    },
    {
      path: "/mural",
      name: "mural",
      component: Mural
    },
    {
      path: "/perfil",
      name: "profile",
      component: Profile
    },
    {
      path: "/alunoDetalhe",
      name: "studentDetail",
      component: StudentDetail,
      props: true,
    },
    {
      path: "./login",
      name: "login",
      component: Login
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: Register
    }
  ]
});
