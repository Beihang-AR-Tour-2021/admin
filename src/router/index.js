import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/security/login'
  },
  {
    path: '/security/login',
    name: 'Login',
    component: () => import('../view/security/Login')
  },
  {
    path: '/admin',
    redirect: '/admin/zones'
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../view/admin/Nav'),
    children: [
      {
        path: 'createZone',
        name: 'CreateZone',
        component: () => import('../view/admin/CreateZone')
      },
      {
        path: 'zones',
        name: 'ZoneList',
        component: () => import('../view/admin/ZoneList')
      }
    ]
  }
]

const router = new VueRouter({
  routes,
})

export default router;
