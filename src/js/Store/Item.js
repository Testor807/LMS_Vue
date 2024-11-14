
import { createStore } from 'vuex';

const store = createStore({
  state: {
    ISBN: null,
  },
  mutations: {
    setISBN(state, isbn) {
      state.ISBN = isbn;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    async fetchUser({ commit }) {
      // 模擬 API 請求
      const user = await new Promise(resolve => {
        setTimeout(() => {
          resolve({ ISBN: null,  });
        }, 1000);
      });
    },
  },
  getters: {
    user(state) {
      return state.ISBN;
    },
  },
});

export default store;