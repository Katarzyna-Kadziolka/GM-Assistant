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
  <tbody v-for="(row, key) in startAmmountOfRowns" :key="{ key }">
    <TableRow />
  </tbody>
</table>
</div>
<v-container>
  <div class="d-flex justify-content-between">
    <div>
      <button type="button" class="btn btn-light mr-3" data-toggle="tooltip" data-placement="top" title="Sort by initiative">Sort</button>
      <button type="button" class="btn btn-light">Reset tracker</button>
    </div>
      <button type="button" class="btn btn-light">Add row</button>
  </div>
</v-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import TableRow from '@/components/Witcher/TableRow.vue'

export default defineComponent({
  name: 'WitcherTracker',
  data: () => {
    return {
      startAmmountOfRowns: 3,
      character: {
        Index: Number,
        Initiative: Number,
        Name: String,
        Description: String,
        Dodge: Number,
        Melee: Number,
        Intellect: Number,
        MagicArmour: Number,
        Armour: Number,
        Hp: Number,
        Damage: Number
      },
      characters: []
    }
  },
  components: {
    TableRow
  },
  created: function () {
    for (var n = 0; n < this.startAmmountOfRowns; n++) {
      this.characters.push()
    }
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
