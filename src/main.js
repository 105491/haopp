

//1
import Vue from 'vue';
import App from './App.vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import shouye from './pages/shouye.vue'
import liebiao from './pages/liebiao'
import xiangqing from './pages/xiangqing'
import gouwuche from './pages/gouwuche'

let router=new VueRouter({
  routes:[
    {
      name:'shouye',
      path:'/shouye',
      component:shouye
    },{
      name:'liebiao',
      path:'/liebiao',
      component:liebiao
    },{
      name:'xiangqing',
      path:'/xiangqing',
      component:xiangqing
    },{
      name:'gouwuche',
      path:'/gouwuche',
      component:gouwuche
    }
  ]
})

//2 
new Vue({
  el:'#app',
  render(create){
    return create(App);
  },
  router,
})