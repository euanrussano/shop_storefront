import Repository from '@/repositories/RepositoryFactory'

const CategoryRepository = Repository.get('categories')

const state = {
    categories: [],
    categoryState: {
      isLoading: false,
      isCreating: false,
      isUpdating: false,
      isDeleting: false
    },
    categoryCRUD: {
      createdData: null,
      updatedData: null,
      deletedData: null
    }
};

const getters = {
    categoryList: state => state.categories,
    
    categoryState: state => (event) => {
      if (event == 'loading'){
        return state.categoryState.isLoading
      }else if (event == 'create') {
        return state.categoryState.isCreating
      }else if (event == 'update') {
        return state.categoryState.isUpdating
      }else if (event == 'delete') {
        return state.categoryState.isDeleting
      }
    },
    categoryCRUD: state => (event) => {
      if (event == 'create'){
        return state.categoryCRUD.createdData
      }else if (event == 'update'){
        return state.categoryCRUD.updatedData
      }else if (event == 'delete'){
        return state.categoryCRUD.deletedData 
    }
  }
};

const actions = {

  loadAllCategories(context){
    context.commit('setCategoryIsLoading', true)
    let categories = [] 
    CategoryRepository.get()
      .then(resp => { 
        categories = resp.data
        context.commit('setCategories', categories)
        context.commit('setCategoryIsLoading', false)
      })
  },


  // async loadDetailCategory(context, product_id){
  // },

  // async createCategory(context, product){
  // },

  // async updateCategory(context, product){
  // },

  // async deleteCategory(context, product_id){
  // },

};

const mutations = {
    setCategories(state, categories){
      state.categories = categories
    },
    setDetailCategory(state, category){
      state.category = category
    },
    saveNewCategory(state, category){
      state.categories.push(category)
      state.categoryCRUD.createdData = category
    },
    saveupdatedCategory(state, category){
      state.categoryCRUD.updatedData = category
    },
    setDeleteCategory(state, category){
      state.categoryCRUD.deletedData = category
    },
    setCategoryIsLoading(state){
      state.categoryState.isLoading = true
    },
    setCategoryIsCreating(state){
      state.categoryState.isCreating = true
    },
    setCategoryIsUpdating(state){
      state.categoryState.isUpdating = true
    },
    setCategoryIsDeleting(state){
      state.categoryState.isDeleting = true
    },
};

export default {
  state,
  getters,
  actions,
  mutations,
};