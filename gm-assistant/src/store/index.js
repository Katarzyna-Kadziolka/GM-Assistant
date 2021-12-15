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
    addToWitcherRows(state, rowId) {
      state.rows_ids.push(rowId);
      state.witcher_rows[rowId] = {
        initiative: 0,
        name: '',
        description: '',
        dodge: 0,
        melee: 0,
        intellect: 0,
        magicArmour: 0,
        armour: 0,
        hp: 0,
        damage: 0,
      };
    },
    rowValueUpdatedByEvent(state, { newValue, id, name }) {
      console.log('Vuex');
      console.log(state.witcher_rows);
      console.log(state.witcher_rows[id]);
      console.log(id);
      switch (name) {
        case 'armour':
          state.witcher_rows[id].armour = newValue;
          break;
        case 'initiative':
          state.witcher_rows[id].initiative = newValue;
          break;
        case 'name':
          state.witcher_rows[id].name = newValue;
          break;
        case 'description':
          state.witcher_rows[id].description = newValue;
          break;
        case 'dodge':
          state.witcher_rows[id].dodge = newValue;
          break;
        case 'melee':
          state.witcher_rows[id].melee = newValue;
          break;
        case 'intellect':
          state.witcher_rows[id].intellect = newValue;
          break;
        case 'magicArmour':
          state.witcher_rows[id].magicArmour = newValue;
          break;
        case 'hp':
          state.witcher_rows[id].hp = newValue;
          break;
        case 'damage':
          state.witcher_rows[id].damage = newValue;
          break;
        default:
          console.log('Name is not exist');
          break;
      }
    },
    rowValueUpdated(state, { newValue, id, name }) {
      console.log('Vuex');
      console.log(id);
      console.log(name);
      console.log(state.witcher_rows[id]);
      switch (name) {
        case 'hp':
          state.witcher_rows[id].hp = newValue;
          break;
        case 'initiative':
          state.witcher_rows[id].initiative = newValue;
          break;
        case 'damage':
          state.witcher_rows[id].damage = newValue;
          break;
        default:
          console.log('Name is not exist');
          break;
      }
    },
  },
  actions: {
  },
  modules: {
  },
});
