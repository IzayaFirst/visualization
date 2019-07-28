import Vue from 'vue';
import Router from 'vue-router';
import AppRouter from './appRouter';

Vue.use(Router);

export default new Router({
  routes: [AppRouter],
});
