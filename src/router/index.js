import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import logout from '../views/logout.vue'
import perfil from '../views/Perfil.vue'
import productos from '@/views/productos.vue'
import carrito from '@/views/Carrito.vue'

import about from '@/views/About.vue'
import home from '@/views/Home.vue'

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
    component: perfil,
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
    path:'/carrito',
    name:'carrito',
    component:carrito
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
  },
  {
    path: '/about',
    name:'about',
    component:about,

  },
]
const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
