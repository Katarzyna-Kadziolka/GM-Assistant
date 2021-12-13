<template>
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
</template>

<script>
export default {
  name: 'WitcherNavigationDrawer',
  data() {
    return {
      items: [
        { title: 'Combat Tracker', icon: 'mdi-sword-cross', routerName: 'witcherTracker' },
        { title: 'Laboratory', icon: 'mdi-pot-steam', routerName: 'laboratory' },
      ],
      right: null,
      group: null,
      colors: [
        { primary: '#303F9F' },
        { secondary: '#9FA8DA' },
      ],
    };
  },
  methods: {
    redirect(routerName) {
      this.$router.replace({ name: routerName });
    },
  },
};
</script>
