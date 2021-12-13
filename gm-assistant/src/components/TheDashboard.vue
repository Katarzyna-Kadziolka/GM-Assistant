<template>
  <div>
    <v-app-bar app dark clipped-left color="#303F9F">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <span class="headline ml-5">
        GM Assistant
      </span>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      color="#7986CB"
      left
      clipped
      app
    >
        <witcher-navigation-drawer />
    </v-navigation-drawer>
  </div>
</template>

<script>
import WitcherNavigationDrawer from './Witcher/WitcherNavigationDrawer.vue';

export default {
  name: 'TheDashboard',
  components: { WitcherNavigationDrawer },
  data() {
    return {
      drawer: false,
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>
