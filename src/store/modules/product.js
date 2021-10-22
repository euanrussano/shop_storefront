import Repository from '@/repositories/RepositoryFactory'

const ProductRepository = Repository.get('products')

const state = {
    products: [],
    productsPaginatedData: null,
    product: {
      id: null,
      name: '',
      description: '',
      price: '0.00',
      images: []
    },
    productState: {
      isLoading: false,
      isCreating: false,
      isUpdating: false,
      isDeleting: false,
    },
    productCRUD: {
      createdData: null,
      updatedData: null,
      deletedData: null
    }
    
};

const getters = {
    productList: state => state.products,
    productsPaginatedData: state => state.productsPaginatedData,
    product: state => state.product,
    
    productState: state => (event) => {
      if (event == 'loading'){
        return state.productState.isLoading
      }else if (event == 'create') {
        return state.productState.isCreating
      }else if (event == 'update') {
        return state.productState.isUpdating
      }else if (event == 'delete') {
        return state.productState.isDeleting
      }
    },
    productCRUD: state => (event) => {
      if (event == 'create'){
        return state.productCRUD.createdData
      }else if (event == 'update'){
        return state.productCRUD.updatedData
      }else if (event == 'delete'){
        return state.productCRUD.deletedData 
    }
  }
};

const actions = {

  loadAllProducts(context){
    context.commit('setProductIsLoading', true)
    let products = []
    ProductRepository.get()
    .then(resp => { 
      products = resp.data
      context.commit('setProducts', products)
      context.commit('setProductIsLoading', false)
    })
  },

  async loadProductsInCategory(context, category_name){
    context.commit('setProductIsLoading', true)
    let products = (await ProductRepository.getInCategory(category_name)).data
    context.commit('setProducts', products)
    context.commit('setProductIsLoading', false)
  },

  async loadDetailProduct(context, product_id){
    context.commit('setProductIsLoading', true)
    let product = (await ProductRepository.getSingle(product_id)).data
    context.commit('setDetailProduct', product)
    context.commit('setProductIsLoading', false)
  },

  async createProduct(context, product_data){
    context.commit('setProductIsCreating', true)
    let product = (await ProductRepository.create(product_data)).data
    context.commit('saveNewProduct', product)
    context.commit('setProductIsCreating', false)
  },

  async updateProduct(context, product_data){
    context.commit('setProductIsUpdating', true)
    let product = (await ProductRepository.update(product_data, product_data.id)).data
    context.commit('saveUpdatedProduct', product)
    context.commit('setProductIsUpdating', false)
  },

  async deleteProduct(context, product_id){
    context.commit('setProductIsDeleting', true)
    let product = (await ProductRepository.delete(product_id)).data
    context.commit('setDeleteProduct', product)
    context.commit('setProductIsDeleting', false)
  },

};

const mutations = {
    setProducts(state, products){
      state.products = products
    },
    setDetailProduct(state, product){
      state.product = product
    },
    saveNewProduct(state, product){
      state.products.push(product)
      state.productCRUD.createdData = product
    },
    saveupdatedProduct(state, product){
      state.productCRUD.updatedData = product
    },
    setDeleteProduct(state, product){
      state.productCRUD.deletedData = product
    },
    setProductIsLoading(state, value){
      state.productState.isLoading = value
    },
    setProductIsCreating(state, value){
      state.productState.isCreating = value
    },
    setProductIsUpdating(state, value){
      state.productState.isUpdating = value
    },
    setProductIsDeleting(state, value){
      state.productState.isDeleting = value
    },
};

export default {
  state,
  getters,
  actions,
  mutations,
};