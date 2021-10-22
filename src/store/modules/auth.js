import Client from "@/clients/AxiosClient";

const state = {
    status: localStorage.getItem('status') || '',
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || {},
};

const getters = {
   isAuthenticated: (state) => !!state.token,
   authUser: (state) => state.user,
   authStatus: (state) => state.status,
   authToken: (state) => state.token,
};

const actions = {

  login(context, {username, password}) {
    return new Promise((resolve, reject) => {
      context.commit('auth_request')
      console.log('username and password inside store')
      console.log(username)
      console.log(password)
      
        Client.post('auth/login',{username: username, password: password})
      .then(resp => {
          let token = resp.data.token
          context.commit('auth_success', token)
          resolve(resp)
      })
        .catch(error => {
          console.log('error')
          context.commit('auth_error')
          localStorage.removeItem('token')
          reject(error)
        })
      })
      
  },
  register(context, {username, password}) {
    return new Promise((resolve, reject) => {
      context.commit('auth_request')
      console.log('username and password inside store')
      console.log(username)
      console.log(password)
      
        Client.post('users',{
                              email:'John@gmail.com',
                              username:username,
                              password:password,
                              name:{
                                  firstname:'John',
                                  lastname:'Doe'
                              },
                              address:{
                                  city:'kilcoole',
                                  street:'7835 new road',
                                  number:3,
                                  zipcode:'12926-3874',
                                  geolocation:{
                                      lat:'-37.3159',
                                      long:'81.1496'
                                  }
                              },  
                              phone:'1-570-236-7033'
                          })
      .then(resp => {
          console.log('success')
          resolve(resp)
      })
        .catch(error => {
          console.log('error')
          reject(error)
        })
      })
      
  },

  // register({commit}, user){
  //   return new Promise((resolve, reject) => {
  //     commit('auth_request')
  //     axios({url: 'http://localhost:3000/register', data: user, method: 'POST' })
  //     .then(resp => {
  //       const token = resp.data.token
  //       const user = resp.data.user
  //       localStorage.setItem('token', token)
  //       axios.defaults.headers.common['Authorization'] = token
  //       commit('auth_success', token, user)
  //       resolve(resp)
  //     })
  //     .catch(err => {
  //       commit('auth_error', err)
  //       localStorage.removeItem('token')
  //       reject(err)
  //     })
  //   })
  // },

  // logout({commit}){
  //   return new Promise((resolve) => {
  //     commit('logout')
  //     localStorage.removeItem('token')
  //     delete axios.defaults.headers.common['Authorization']
  //     resolve()
  //   })
  // }
};

const mutations = {
    auth_initializeStore(state){
      if (localStorage.getItem('status')){
        state.status = localStorage.getItem('status')
      }
      if (localStorage.getItem('token')){
        state.token = localStorage.getItem('token')
      }
      if (localStorage.getItem('user')){
        state.user = JSON.parse(localStorage.getItem('user'))
      }
    },

    auth_request(state){
        state.status = 'loading'
    },
    auth_setUser(state, user){
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    auth_success(state, token){
      console.log('auth_success')
      console.log(token)
      Client.defaults.headers.common['Authorization'] = token

      state.token = token  
      localStorage.setItem('token', token)
      state.status = 'success'
      localStorage.setItem('status', state.status)
    },
    auth_error(state){
      state.status = 'error'
      state.status = 'error'
      localStorage.setItem('status', state.status)
    },
    logout(state){
      state.token = ''
      localStorage.removeItem('token')
      state.status = 'not logged'
      localStorage.setItem('status', state.status)
    },
};

export default {
  state,
  getters,
  actions,
  mutations,
};