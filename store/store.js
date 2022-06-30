// import json from '@/db.json'

export const state = () => ({
  cart: [],
})
export const mutations = {
  ADD_TO_CART(state, item) {
    state.cart.push(item)
  },
}
export const actions = {
  addItemToCart({ commit }, item) {
    commit('ADD_TO_CART', item)
  },
}

export const getters = {
  cartItemCount(state) {
    return state.cart.length
  },
  cartItemList(state) {
    return state.cart
  },
}
