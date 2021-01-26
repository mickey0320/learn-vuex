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
  actions: {},
  modules: {},
});
