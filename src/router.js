import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import HistoryView from './views/HistoryView.vue';
import LocationView from './views/LocationView.vue';
import InstitutionalView from './views/InstitutionalView.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/clube', component: HistoryView },
    { path: '/localizacao', component: LocationView },
    { path: '/institucional', component: InstitutionalView }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;