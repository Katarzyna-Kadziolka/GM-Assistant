<template>
    <tr>
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="text" class="form-control" @input="Character.Initiative = $event.target.value">
          </div>
          <button type="button" class="ml-3" data-toggle="tooltip" data-placement="top" title="Random">
            <v-list-item-icon>
              <v-icon>{{'mdi-dice-6'}}</v-icon>
            </v-list-item-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Name = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Description = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Dodge = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Melee = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Intellect = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.MagicArmour = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Armor = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Hp = $event.target.value">
        </div>
      </td>
      <td class="row-border">
        <div class="input-group">
          <input type="text" class="form-control" @input="Character.Damage = $event.target.value">
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light d-flex justify-content-center" data-toggle="tooltip" data-placement="top" title="Physical damage">
            <v-icon>{{'mdi-sword'}}</v-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light d-flex justify-content-center" data-toggle="tooltip" data-placement="top" title="Magic damage">
            <v-icon>{{'mdi-fire'}}</v-icon>
          </button>
        </div>
      </td>
    </tr>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TableRow',
  data: () => {
    return {
      Character: {
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
      }
    }
  }
})
</script>

<style lang="scss" scoped>
    .row-border {
        border-left: 3px solid #e6e9ec;
    }
</style>
