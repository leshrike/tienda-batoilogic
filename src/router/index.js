import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
import entregas from '../views/entregas.vue'
import productos from '@/views/productos.vue'

import home from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'home',
    component:home,

  },
  {
    path: '/login',
    name:'login',
    component: login,
    meta:{
      guest:true
    }
  },
  {
    path:'/perfil',
    name:'perfil',
    component: entregas,
    beforeEnter:(to,from,next)=>{
        if(!localStorage.token){
          next(false);
        }else{
          next();
        }
    },
    meta:{
      requiresAuth:true
    }
  },
  {
    path:'/productos',
    name:'productos',
    component:productos,
    meta:{
      guest:true,
    }
  },
  {
    path:'/logout',
    name:'logout',
    component: logout,
    beforeEnter:(to,from,next)=>{
        if(!localStorage.token){
          next(false);
        }else{
          next();
        }
    },
    meta:{
      requiresAuth:true
    }
  }
]
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
