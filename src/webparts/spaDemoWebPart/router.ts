import Vue from 'vue';
import Router from 'vue-router';
import SPADemo from './views/SPADemo.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      component: SPADemo
    }
  ]
});