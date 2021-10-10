<template>
<div class="table-responsive">
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Initiative</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Dodge</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Fist fight">Melee</th>
      <th scope="col">Intellect</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Magic armor">Magic ar.</th>
      <th scope="col">Armor</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Health Point">HP</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Amount of damage dealt">Damage</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody v-for="(row, key) in startAmmountOfRowns" :key="{ key }">
    <tr>
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="text" class="form-control">
          </div>
          <button type="button" class="btn_width ml-3" data-toggle="tooltip" data-placement="top" title="Random">
            <v-list-item-icon>
              <v-icon>{{'mdi-dice-6'}}</v-icon>
            </v-list-item-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control">
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light btn_width" data-toggle="tooltip" data-placement="top" title="Physical damage">
            <v-list-item-icon class="mr-3">
              <v-icon>{{'mdi-sword'}}</v-icon>
            </v-list-item-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light btn_width" data-toggle="tooltip" data-placement="top" title="Magic damage">
            <v-list-item-icon class="mr-3">
              <v-icon>{{'mdi-fire'}}</v-icon>
            </v-list-item-icon>
          </button>
        </div>
      </td>
    </tr>
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

export default defineComponent({
  name: 'WitcherTracker',
  data: () => {
    return {
      startAmmountOfRowns: 3
    }
  }
})
</script>

<style lang="scss" scoped>
  .btn_width {
    width: 40px
  }
</style>
