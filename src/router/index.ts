import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import About from  '../views/About.vue'
import Groups from  '../views/Groups.vue'
import Profile from  '../views/Profile.vue'
import Students from  '../views/Students.vue'
import Mural from  '../views/Mural.vue'
Vue.use(Router);

export default new Router({
  mode: 'history',
  
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'about',
    component: About
  },
  {
    path: '/grupos',
    name: 'groups',
    component: Groups
  },
  {
    path: '/alunos',
    name: 'students',
    component: Students
  },
  {
    path: '/mural',
    name: 'mural',
    component: Mural
  },
  {
    path: '/perfil',
    name: 'profile',
    component: Profile
  },
],

});