import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import HistoryView from './views/HistoryView.vue';
import LocationView from './views/LocationView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/history', component: HistoryView },
    { path: '/location', component: LocationView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,

});

export default router;