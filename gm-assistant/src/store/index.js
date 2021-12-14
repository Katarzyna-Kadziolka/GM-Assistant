import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    witcher_rows: {},
    rows_ids: [],
  },
  getters: {
    row_state: (state) => (id) => state.witcher_rows[id],
  },
  mutations: {
    addToWitcherRows(state, rowId, row) {
      state.rows_ids.push(rowId);
      state.witcher_rows[rowId] = row;
    },
  },
  actions: {
  },
  modules: {
  },
});
