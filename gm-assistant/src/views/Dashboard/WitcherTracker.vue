<template>
<div class="table-responsive">
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">Initiative</th>
      <th scope="col">Name</th>
      <th scope="col">Description</th>
      <th scope="col">Dodge</th>
      <th scope="col">Fist fight</th>
      <th scope="col">Intellect</th>
      <th scope="col" data-toggle="tooltip" data-placement="top" title="Magic resistance">Magic res.</th>
      <th scope="col">Armor</th>
      <th scope="col">HP</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody v-for="(row, key) in startAmmountOfRowns" :key="{ key }">
    <tr>
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
          <button type="button" class="btn btn-light btn_width"><b>+5</b></button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light btn_width"><b>-5</b></button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WitcherTracker',
  data: () => {
    return {
      startAmmountOfRowns: 5
    }
  }
})
</script>

<style lang="scss" scoped>
  .btn_width {
    width: 40px
  }
</style>
