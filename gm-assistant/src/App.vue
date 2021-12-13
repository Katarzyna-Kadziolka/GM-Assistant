<template>
  <v-app>
    <the-dashboard />
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TheDashboard from './components/TheDashboard.vue';

export default {
  components: { TheDashboard },
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
