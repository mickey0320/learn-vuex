import Vue from "vue";
import Vuex from "../vuex/index";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "yanjian",
  },
  mutations: {
    setName(state, payload) {
      state.name = payload;
    },
  },
  getters: {
    name2(state) {
      return state.name + "-";
    },
  },
  actions: {
    setAsyncName({ commit }, payload) {
      setTimeout(() => {
        commit("setName", payload);
      }, 1000);
    },
  },
  modules: {},
});
