<template>
  <tr :class="[ character.hp < 0 ? 'dead' : 'table-default' ]">
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="number" class="form-control"
                v-model="character.initiative"
                @focus="$event.target.select()">
          </div>
          <v-btn class="ml-2" type="button" icon @click="getRandomInitiative()">
            <v-icon>{{'mdi-dice-6'}}</v-icon>
          </v-btn>
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control"
            v-model="character.name"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control"
            v-model="character.description"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="character.dodge"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="character.melee"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="character.intellect"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="this.character.magicArmour"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="this.character.armour"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="this.character.hp"
            @focus="$event.target.select()">
        </div>
      </td>
      <td class="row-border">
        <div class="input-group">
          <input type="number" class="form-control"
            v-model="this.character.damage"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button"
            icon
            @click="dealDamage(this.character.damage - this.character.armour)">
            <v-icon>{{'mdi-sword'}}</v-icon>
          </v-btn>
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button"
            icon
            @click="dealDamage(this.character.damage - this.character.magicArmour)">
            <v-icon>{{'mdi-fire'}}</v-icon>
          </v-btn>
        </div>
      </td>
    </tr>
</template>

<script>
export default {
  name: 'WitcherTableRow',
  data() {
    return {
      character: {},
    };
  },
  props: {
    id: Number,
  },
  mounted() {
    this.character = this.$store.getters.row_state(this.id);
  },
  methods: {
    getRandomInitiative() {
      const min = 1;
      const max = 20;
      this.character.initiative = Math.floor(Math.random() * (max - min + 1)) + min;
    },
    dealDamage(realDamage) {
      if (realDamage > 0) {
        let hpInt = Number(this.character.hp);
        hpInt -= realDamage;
        this.character.hp = hpInt;
      }
      this.damage = 0;
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
