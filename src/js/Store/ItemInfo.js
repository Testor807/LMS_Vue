// ItemInfo.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isbn: '',
  },
  mutations: {
    setISBN(state, isbn) {
      state.isbn = isbn;
    },
  },
  actions: {
    setISBN({ commit }) {
      commit('setISBN');
    },
  },
  getters: {
    isbn(state) {
      return state.isbn;
    },
  },
});

export default store;