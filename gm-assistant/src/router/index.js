import Vue from 'vue';
import VueRouter from 'vue-router';
import WitcherTracker from '../views/Witcher/WitcherTracker.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'WitcherTracker',
    component: WitcherTracker,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
