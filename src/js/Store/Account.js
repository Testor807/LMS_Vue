
import { createStore } from 'vuex';

const store = createStore({
  state: {
    id: null,
    type: "admin",
    lid: "KLL"
  },
  mutations: {
    setId(state, id) {
      state.id = id;
    },
    setType(state, type){
        this.type = type;
    },
    setLid(state, lid){
      this.lid = lid;
  }
  },
  actions: {
    setId({ commit }) {
      commit('setId');
    },
    setType({ commit }) {
        commit('setType');
    },
    setLid({ commit }) {
      commit('setLid');
  },
  },
  getters: {
    Id(state) {
      return state.id;
    },
    Type(state) {
        return state.type;
    },
    Lid(state) {
      return state.lid;
    },
  },
});

export default store;