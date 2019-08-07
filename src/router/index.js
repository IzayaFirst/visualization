import Vue from 'vue';
import Router from 'vue-router';
import MainRouter from './mainRouter';
import PopulationRouter from './populationRouter';

Vue.use(Router);

const router = new Router({
  linkActiveClass: 'open active',
  scrollBehavior: () => ({
    y: 0,
  }),
  mode: 'history',
  routes: [MainRouter, PopulationRouter],
});

export default router;
