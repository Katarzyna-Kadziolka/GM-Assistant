<template>
  <tr :class="[ this.witcher_rows[this.id].hp < 0 ? 'dead' : 'table-default' ]">
      <td>
        <div class="d-flex justify-content-between">
          <div class="input-group">
            <input type="number" class="form-control"
                :value="this.witcher_rows[this.id].initiative"
                @change="valueUpdatedByEvent($event, 'initiative')"
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
            :value="this.witcher_rows[this.id].name"
            @change="valueUpdatedByEvent($event, 'name')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="text" class="form-control"
            :value="this.witcher_rows[this.id].description"
            @change="valueUpdatedByEvent($event, 'description')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].dodge"
            @change="valueUpdatedByEvent($event, 'dodge')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].melee"
            @change="valueUpdatedByEvent($event, 'melee')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].intellect"
            @change="valueUpdatedByEvent($event, 'intellect')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].magicArmour"
            @change="valueUpdatedByEvent($event, 'magicArmour')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].armour"
            @change="valueUpdatedByEvent($event, 'armour')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].hp"
            @change="valueUpdatedByEvent($event, 'hp')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td class="row-border">
        <div class="input-group">
          <input type="number" class="form-control"
            :value="this.witcher_rows[this.id].damage"
            @change="valueUpdatedByEvent($event, 'damage')"
            @focus="$event.target.select()">
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button"
            icon
            @click="dealDamage(
              this.witcher_rows[this.id].damage - this.witcher_rows[this.id].armour)">
            <v-icon>{{'mdi-sword'}}</v-icon>
          </v-btn>
        </div>
      </td>
      <td>
        <div class="input-group">
          <v-btn type="button"
            icon
            @click="dealDamage(
              this.witcher_rows[this.id].damage - this.witcher_rows[this.id].magicArmour)">
            <v-icon>{{'mdi-fire'}}</v-icon>
          </v-btn>
        </div>
      </td>
    </tr>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  name: 'WitcherTableRow',
  props: {
    id: Number,
  },
  computed: {
    ...mapState(['witcher_rows']),
  },
  methods: {
    ...mapMutations(['rowValueUpdatedByEvent', 'rowValueUpdated']),
    getRandomInitiative() {
      const min = 1;
      const max = 20;
      this.valueUpdated(Math.floor(Math.random() * (max - min + 1)) + min, 'initiative');
    },
    dealDamage(realDamage) {
      if (realDamage > 0) {
        let hp = Number(this.witcher_rows[this.id].hp);
        hp -= realDamage;
        this.valueUpdated(hp, 'hp');
      }
      this.valueUpdated(0, 'damage');
    },
    valueUpdatedByEvent(event, name) {
      this.$store.commit('rowValueUpdatedByEvent', {
        newValue: event.target.value,
        id: this.id,
        name,
      });
    },
    valueUpdated(newValue, name) {
      this.$store.commit('rowValueUpdated', {
        newValue,
        id: this.id,
        name,
      });
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
