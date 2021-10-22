import Repository from '@/repositories/RepositoryFactory'

const CartRepository = Repository.get('carts')

const state = {
    carts: [],
    cart: null,
    cartState: {
      isLoading: false,
      isCreating: false,
      isUpdating: false,
      isDeleting: false,
    },
    cartCRUD: {
      createdData: null,
      updatedData: null,
      deletedData: null
    }
    
};

const getters = {
    cartList: state => state.carts,
    cart: state => state.cart,
    
    cartState: state => (event) => {
      if (event == 'loading'){
        return state.cartState.isLoading
      }else if (event == 'create') {
        return state.cartState.isCreating
      }else if (event == 'update') {
        return state.cartState.isUpdating
      }else if (event == 'delete') {
        return state.cartState.isDeleting
      }
    },
    cartCRUD: state => (event) => {
      if (event == 'create'){
        return state.cartCRUD.createdData
      }else if (event == 'update'){
        return state.cartCRUD.updatedData
      }else if (event == 'delete'){
        return state.cartCRUD.deletedData 
    }
  }
};

const actions = {

  loadAllCarts(context){
    context.commit('setCartIsLoading', true)
    let carts = []
    CartRepository.get()
    .then(resp => { 
      carts = resp.data
      context.commit('setCarts', carts)
      context.commit('setCartIsLoading', false)
    })
  },

  async loadCartFromUser(context, user_id){
    context.commit('setCartIsLoading', true)
    let cart = (await CartRepository.getFromUser(user_id)).data
    context.commit('setDetailCart', cart)
    context.commit('setCartIsLoading', false)
  },

  async loadDetailCart(context, cart_id){
    context.commit('setCartIsLoading', true)
    let cart = (await CartRepository.getSingle(cart_id)).data
    context.commit('setDetailCart', cart)
    context.commit('setCartIsLoading', false)
  },

  async createCart(context, cart_data){
    context.commit('setCartIsCreating', true)
    let cart = (await CartRepository.create(cart_data)).data
    context.commit('saveNewCart', cart)
    context.commit('setCartIsCreating', false)
  },

  async updateCart(context, cart_data){
    context.commit('setCartIsUpdating', true)
    let cart = (await CartRepository.update(cart_data, cart_data.id)).data
    context.commit('saveUpdatedCart', cart)
    context.commit('setCartIsUpdating', false)
  },

  async deleteCart(context, cart_id){
    context.commit('setCartIsDeleting', true)
    let cart = (await CartRepository.delete(cart_id)).data
    context.commit('setDeleteCart', cart)
    context.commit('setCartIsDeleting', false)
  },

};

const mutations = {
    setCarts(state, carts){
      state.carts = carts
    },
    setDetailCart(state, cart){
      state.cart = cart
    },
    saveNewCart(state, cart){
      state.carts.push(cart)
      state.cartCRUD.createdData = cart
    },
    saveupdatedCart(state, cart){
      state.cartCRUD.updatedData = cart
    },
    setDeleteCart(state, cart){
      state.cartCRUD.deletedData = cart
    },
    setCartIsLoading(state, value){
      state.cartState.isLoading = value
    },
    setCartIsCreating(state, value){
      state.cartState.isCreating = value
    },
    setCartIsUpdating(state, value){
      state.cartState.isUpdating = value
    },
    setCartIsDeleting(state, value){
      state.cartState.isDeleting = value
    },
};

export default {
  state,
  getters,
  actions,
  mutations,
};