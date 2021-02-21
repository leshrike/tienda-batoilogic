import Vue from 'vue'
import Vuex from 'vuex'
import apiService from "@/apiService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    providers: [],
    products: [{}],
    userProd: [],
    users: [],
    userAuth: [],
    token:'',
    
  },

  getters: {
    getProvider: (state) => (id) => {
      return state.providers.find(provider => provider.id === Number(id)) || {}
    },
    getUserProd: (state) => () => {
      return state.userProd
    },
    getUser: (state) => (token) => {
      return state.users.find(user => user.token === Number(token)) || {}
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
      state.userProd.push(product)
      localStorage.userProd.push(product)
    },
    removeFromCart(state, id) {
      const index = state.userProd.findIndex(product => product.id === id)
      if (index >= 0) state.userProd.splice(index, 1)
      if (index >= 0) localStorage.userProd.splice(index, 1)
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
        })
        .catch((error) => {
          alert(error.message || error.status || error);
        })
    },
  },
  modules: {
  }
})
