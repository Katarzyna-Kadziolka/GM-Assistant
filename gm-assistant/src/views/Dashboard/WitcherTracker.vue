<template>
<div class="table-responsive">
<table class="table tr-hover">
  <thead>
    <tr>
      <th scope="col">Initiative</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Dodge</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Fist fight">Melee</th>
      <th scope="col">Mind</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Magic armor">Magic ar.</th>
      <th scope="col">Armor</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Health Point">HP</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Amount of damage dealt">Damage</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody v-for="(row, key) in startAmmountOfRows" :key="{ key }">
    <TableRow />
  </tbody>
</table>
</div>
<v-container>
  <div class="d-flex justify-content-between">
    <div>
      <button type="button" class="btn btn-light mr-3" data-toggle="tooltip" data-placement="top" title="Sort by initiative">Sort</button>
      <button type="button" class="btn btn-light" @click="this.startAmmountOfRows = 3">Reset tracker</button>
    </div>
      <button type="button" class="btn btn-light" @click="this.startAmmountOfRows++">Add row</button>
  </div>
</v-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import TableRow from '@/components/Witcher/TableRow.vue'
import { useStore } from '@/store/index'

export default defineComponent({
  setup () {
    const store = useStore()
  },
  name: 'WitcherTracker',
  data: () => {
    return {
      startAmmountOfRows: 3,
      character: {
        Initiative: 0,
        Name: '',
        Description: '',
        Dodge: 0,
        Melee: 0,
        Intellect: 0,
        MagicArmour: 0,
        Armour: 0,
        Hp: 0,
        Damage: 0
      }
    }
  },
  components: {
    TableRow
  },
  methods: {
    
  }
})
</script>

<style lang="scss" scoped>
  .tr-hover {
    :hover {
      background: #E8EAF6;
    }
  }
</style>
