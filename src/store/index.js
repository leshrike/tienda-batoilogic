import Vue from 'vue'
import Vuex from 'vuex'
import apiService from "@/apiService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    providers: [], //Proveedores de la tienda
    products: [{}], //Productos de la tienda
    userProds: [], //Productos del usuario
    users: [],  //Usuarios de la tienda
    userAuth: [], //Usuario Autentificado
    token:'', //Token de usuario autentificado
    
  },

  getters: {
    getProvider: (state) => (id) => {
      return state.providers.find(provider => provider.id === Number(id)) || {}
    },
    getUserProds: (state) => () => {
      return state.userProds
    },
    getUser: (state) => (email) => {
      return state.users.find(user => user.email === email) || {}
    },
    getUserAuth: (state) => () => {
      return state.userAuth
    },

    isAuthenticated: state => !!state.token,
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    loadUsers(state, users) {
      state.users = users;
    },
    loadToken(state, token) {
      state.token = token;
    },
    addToCart(state, product) {
      state.userProds.push(product)
      localStorage.userProds.push(product)
    },
    removeFromCart(state, id) {
      const index = state.userProds.findIndex(product => product.id === id)
      if (index >= 0) state.userProds.splice(index, 1)
      if (index >= 0) localStorage.userProds.splice(index, 1)
    },
    login(state, token) {
      state.token = token;
      localStorage.token = token;
    },
  },
  actions: {
    loadProducts(context) {
      apiService.products.getAll()
      .then((response) => {
        context.commit('loadProducts', response.data.data)
      })
      .catch((err) => alert(err.message || err))
    },
    addToCart(context, producto) {
      return new Promise((resolv, reject) => {
        apiService.orders.create(producto)
        .then((response) => {
          context.commit('addToCart', response.data.data)
          resolv()
        })
        .catch(err => reject(err))
      })
    },
    addCartStock(context, producto) {
      return new Promise((resolv, reject) => {
        apiService.orders.modify(producto)
        .then((response) => {
          context.commit('addToCart', response.data)
          resolv()
        })
        .catch(err => reject(err))
      })
    },
    /*removeFromCart(context) {
      apiService.userPord.getAll()
      .then((response) => {
        context.commit('removeFromCart', response.data)
      })
      .catch((err) => alert(err.message || err))
    },*/
    loadUsers(context) {
      apiService.users.getAll()
      .then((response) => {
        context.commit('loadUsers', response.data)
      })
      .catch((err) => alert(err.message || err))
    },
    loadByToken(context, token) {
      apiService.users.getByToken(token)
      .then((response) => {
        context.commit('loadToken', response.data)
      })
      .catch((err) => alert(err.message || err))
    },
    login(context, user) {
      apiService.users.login(user)
        .then((response) => {
          context.commit('login', response);
          context.commit('',user.login);
        })
        .catch((error) => {
          alert(error.message || error.status || error);
        })
    },
  },
  modules: {
  }
})
