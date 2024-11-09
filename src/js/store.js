// store.js
import { createStore } from 'vuex';

const store = createStore({
  state: {
    count: 0,
    user: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setUser(state, user) {
      state.user = user;
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
          resolve({ name: 'John Doe', age: 30 });
        }, 1000);
      });
      commit('setUser', user);
    },
  },
  getters: {
    count(state) {
      return state.count;
    },
    user(state) {
      return state.user;
    },
  },
});

export default store;