import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router';

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: () => import("@/views/login/login.vue"),
    alias: '/login',
    meta: {
      title: 'login'
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});
export default router;
