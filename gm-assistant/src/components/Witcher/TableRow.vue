<template>
    <tr :class="[ Character.Hp < 0 ? 'dead' : 'table-default' ]">
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="text" class="form-control" v-model="Character.Initiative" @focus="$event.target.select()">
          </div>
          <button type="button" class="ml-3 btn btn-light d-flex justify-content-center" data-toggle="tooltip" data-placement="top" title="Random" @click="getRandomInitiative()">
            <v-list-item-icon>
              <v-icon>{{'mdi-dice-6'}}</v-icon>
            </v-list-item-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Name" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Description" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Dodge" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Melee" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Intellect" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.MagicArmour" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Armour" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Hp" @focus="$event.target.select()">
        </div>
      </td>
      <td class="row-border">
        <div class="input-group">
          <input type="text" class="form-control" v-model="Character.Damage" @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light d-flex justify-content-center" data-toggle="tooltip" data-placement="top" title="Physical damage" @click="dealDamage(this.Character.Damage - this.Character.Armour)">
            <v-icon>{{'mdi-sword'}}</v-icon>
          </button>
        </div>
      </td>
      <td>
        <div class="input-group">
          <button type="button" class="btn btn-light d-flex justify-content-center" data-toggle="tooltip" data-placement="top" title="Magic damage" @click="dealDamage(this.Character.Damage - this.Character.MagicArmour)">
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
  props: {
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
  methods: {
    getRandomInitiative () {
      var min = 1
      var max = 20
      this.Character.Initiative = Math.floor(Math.random() * (max - min + 1)) + min
    },
    dealDamage (realDamage: number) {
      if (realDamage > 0) {
        this.Character.Hp = this.Character.Hp - realDamage
      }
      this.Character.Damage = 0
    }
  }
})
</script>
<style lang="scss" scoped>
  .row-border {
    border-left: solid 3px #e6e9ec;
  }
  .dead {
    background: #C5CAE9;
  }
</style>
