<template>
  <div>
    <v-app-bar app dark clipped-left color="#303F9F">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
      </v-app-bar-nav-icon>
      <span class="headline ml-5">
        GM Assistant
      </span>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
    <v-navigation-drawer
      v-model="drawer"
      color="#7986CB"
      left
      clipped
      app
    >
      <v-list
          dense
          nav
        >
        <v-list-item-group
          v-model="group"
          >
          <v-list-item
            v-for="item in items"
            :key="item.title"
            @click="redirect(item.routerName)"
          >
            <v-list-item-icon class="mr-3">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'TheDashboard',
  components: {},
  data() {
    return {
      items: [
        { title: 'Combat Tracker', icon: 'mdi-sword-cross', routerName: 'witcherTracker' },
        { title: 'Laboratory', icon: 'mdi-pot-steam', routerName: 'laboratory' },
      ],
      right: null,
      drawer: false,
      group: null,
      colors: [
        { primary: '#303F9F' },
        { secondary: '#9FA8DA' },
      ],
    };
  },
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    redirect(routerName) {
      this.$router.replace({ name: routerName });
    },
  },
};
</script>
