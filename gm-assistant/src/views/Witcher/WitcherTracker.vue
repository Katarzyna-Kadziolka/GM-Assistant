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
        <tbody v-for="(row, key) in witcher_rows" :key="{ key }">
            <WitcherTableRow />
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
  components: {
    WitcherTableRow,
  },
  computed: {
    ...mapState(['witcher_rows']),
  },
  mounted() {
    for (let step = 0; step < 3; step += 1) {
      this.addNewRow();
    }
  },
  methods: {
    ...mapMutations(['addToWitcherRows']),
    addNewRow() {
      const row = {
        Initiative: 0,
        Name: '',
        Description: '',
        Dodge: 0,
        Melee: 0,
        Intellect: 0,
        MagicArmour: 0,
        Armour: 0,
        Hp: 0,
        Damage: 0,
      };
      this.$store.commit('addToWitcherRows', row);
    },
    resetTracker() {},
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
