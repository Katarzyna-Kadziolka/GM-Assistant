<template>
  <v-container>
      <div class="table-responsive">
        <table class="table tr-hover ">
        <thead>
            <tr>
            <th scope="col">Initiative</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Dodge</th>
            <th scope="col" data-toggle="tooltip" data-placement="top" title="Fist fight">Melee</th>
            <th scope="col">Mind</th>
            <th scope="col" data-toggle="tooltip" data-placement="top" title="Magic armor">
                Magic ar.</th>
            <th scope="col">Armor</th>
            <th scope="col" data-toggle="tooltip" data-placement="top" title="Health Point">HP</th>
            <th scope="col" data-toggle="tooltip" data-placement="top"
                title="Amount of damage dealt">Damage</th>
            <th scope="col"></th>
            <th scope="col"></th>
            </tr>
        </thead>
        <tbody v-for="(rowId) in rows_ids" :key="rowId">
            <WitcherTableRow :id="rowId" />
        </tbody>
        </table>
      </div>
      <v-container>
        <div class="d-flex justify-content-between">
            <div>
            <button type="button" class="btn btn-light mr-3"
                data-toggle="tooltip"
                data-placement="top"
                title="Sort by initiative">Sort</button>
            <button type="button" class="btn btn-light"
                @click="resetTracker()">Reset tracker</button>
            </div>
            <button type="button" class="btn btn-light"
              @click="addNewRow()">Add row</button>
        </div>
      </v-container>
  </v-container>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import WitcherTableRow from '../../components/Witcher/WitcherTableRow.vue';

export default {
  name: 'WitcherTracker',
  data() {
    return {
      id: 0,
    };
  },
  components: {
    WitcherTableRow,
  },
  computed: {
    ...mapState(['rows_ids']),
  },
  mounted() {
    for (let step = 0; step < 3; step += 1) {
      this.addNewRow();
    }
  },
  methods: {
    ...mapMutations(['addToWitcherRows']),
    addNewRow() {
      this.id += 1;
      const character = {
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
      this.$store.commit('addToWitcherRows', this.id, character);
    },
    resetTracker() {},
    sortTracker() {},
  },
};
</script>

<style lang="scss" scoped>
  .tr-hover {
    :hover {
      background: #E8EAF6;
    }
  }
</style>
