import Vue from 'vue'
import VueRouter from 'vue-router'

import AppHeader from '../views/layout/AppHeader.vue'
import AppFooter from '../views/layout/AppFooter.vue'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ProductDetail from '../views/ProductDetail.vue'
// import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components:
      {
        header: AppHeader,
        main: Home,
        footer: AppFooter
      } 
  },
  // {
  //   path: '/entrar',
  //   name: 'Login',
  //   components: 
  //     {
  //       main: Login
  //     },
  // },
  {
    path: '/cadastrar',
    name: 'Register',
    components: 
      {
        header: AppHeader,
        main: Register,
        footer: AppFooter
      } 
  },
  {
    path: '/products/:product_id',
    name: 'ProductDetail',
    components:
      {
        header: AppHeader,
        main: ProductDetail,
        footer: AppFooter
      } 
  },
  {
    path: '/:category_id',
    name: 'ProductByCategory',
    components:
      {
        header: AppHeader,
        main: Home,
        footer: AppFooter
      } 
  },
  {
    path: '/about',
    name: 'About',
    components:
      {
        header: AppHeader,
        main: About,
        footer: AppFooter
      } 
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
