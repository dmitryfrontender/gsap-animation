/* eslint-disable */
import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SecondPage from '../views/SecondPage.vue';
import ThirdPage from '../views/ThirdPage.vue';
import FourthPage from '../views/FourthPage.vue';
import FifthPage from '../views/FifthPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/second-page',
    name: 'second-page',
    component: SecondPage,
  },
  {
    path: '/third-page',
    name: 'third-page',
    component: ThirdPage,
  },
  {
    path: '/fourth-page',
    name: 'fourth-page',
    component: FourthPage,
  },
  {
    path: '/fifth-page',
    name: 'fifth-page',
    component: FifthPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
