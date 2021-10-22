import Vue from 'vue'
import Swiper from 'vue-awesome-swiper'
// import $ from 'jquery'

// import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'

// import style (<= Swiper 5.x)
// import 'swiper/css/swiper.css'

Vue.use(Swiper, /* { default options with global component } */)
// Vue.use($)

var bootstrap = require("@/assets/vendor/bootstrap/js/bootstrap.bundle.min.js")
var noframework = require('@/assets/vendor/waypoints/lib/noframework.waypoints.js')
// var swiper = require('@/assets/vendor/swiper/swiper-bundle.min.js')
// var choices = require('@/assets/vendor/choices/public/assets/scripts/choices.js')
// var theme = require('@/assets/js/theme.js')

Vue.use(bootstrap)
Vue.use(noframework)
// Vue.use(swiper)
// Vue.use(choices)
// Vue.use(theme)

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap an BootstrapVue CSS files (order is important)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/assets/css/style.default.css'
import '@/assets/vendor/swiper/swiper-bundle.min.css'
import '@/assets/vendor/choices/public/assets/styles/choices.css'
import '@/assets/css/style.default.css'
import '@/assets/css/custom.css' // Custom stylesheet for changes
    

import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// Vue.use(swiper)
// Vue.use(noframework)
// Vue.use(choices)
// Vue.use(theme)

if ('token' in localStorage) {
  const token = localStorage.getItem('token')

  axios.defaults.headers.common['Authorization'] = token
}

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
