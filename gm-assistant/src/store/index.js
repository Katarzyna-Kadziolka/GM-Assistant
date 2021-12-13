import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    witcher_rows: [],
  },
  mutations: {
    addToWitcherRows(state, row) {
      state.witcher_rows.push(row);
    },
  },
  actions: {
  },
  modules: {
  },
});
