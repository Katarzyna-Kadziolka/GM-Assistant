<template>
  <tr :class="[ Hp < 0 ? 'dead' : 'table-default' ]">
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="text" class="form-control" v-model="Initiative"
                @focus="$event.target.select()">
          </div>
          <v-btn class="ml-2" type="button" icon @click="getRandomInitiative()">
            <v-icon>{{'mdi-dice-6'}}</v-icon>
          </v-btn>
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Name"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Description"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Dodge"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Melee"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Intellect"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="MagicArmour"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Armour"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control" v-model="Hp"
            @focus="$event.target.select()">
        </div>
      </td>
      <td class="row-border">
        <div class="input-group">
          <input type="text" class="form-control" v-model="Damage"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button" icon @click="dealDamage(this.Damage - this.Armour)">
            <v-icon>{{'mdi-sword'}}</v-icon>
          </v-btn>
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button" icon @click="dealDamage(this.Damage - this.MagicArmour)">
            <v-icon>{{'mdi-fire'}}</v-icon>
          </v-btn>
        </div>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'WitcherTableRow',
  data: () => ({
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
  }),
  methods: {
    getRandomInitiative() {
      const min = 1;
      const max = 20;
      this.Initiative = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    dealDamage(realDamage) {
      if (realDamage > 0) {
        this.Hp -= realDamage;
      }
      this.Damage = 0;
    },
  },

};
</script>

<style lang="scss" scoped>
  .row-border {
    border-left: solid 3px #212529;
  }
  .dead {
    background: #C5CAE9;
  }
  .smaller-rows {
    height: 50%;
  }
</style>
