import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth";
import product from "./modules/product";
import category from "./modules/category";
import cart from "./modules/cart";

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    auth,
    product,
    category,
    cart
  },
  plugins: [],
});
