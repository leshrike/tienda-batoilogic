import Vue from 'vue'
import Vuex from 'vuex'
import apiService from "@/apiService";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    providers: [],
    products: [{}],
    userProd: [],
  },
  getters: {
    getProvider: (state) => (id) => {
      return state.providers.find(provider => provider.id === Number(id)) || {}
    },
    getUserProd: (state) => () => {
      return state.userProd
    },
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
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
  },
  actions: {
    loadProducts(context) {
      apiService.products.getAllActive()
      .then((response) => {
        context.commit('loadProducts', response.data)
      })
      .catch((err) => alert(err.message || err))
    },
    addToCart(context, producto) {
      return new Promise((resolv, reject) => {
        apiService.orders.create(producto)
        .then((response) => {
          context.commit('addToCart', response.data)
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
  },
  modules: {
  }
})
