import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {useStore} from "@/store";

import Dashboard from "@/views/Dashboard.vue";
import Users from "@/views/Users.vue";
import AddUser from "@/views/AddUser.vue";
import Transactions from "@/views/Transactions.vue";
import Settings from "@/views/Settings.vue";
import Login from '@/views/Login.vue';
import NotFound from '@/views/NotFound.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser,
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: Transactions,
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {layout: 'empty'},
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound,
    meta: {layout: 'empty'},
  },
  {path: '/:pathMatch(.*)*', redirect: '/404'},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// Check user is logged in before each transition.
router.beforeEach(function (to, from, next) {
  const store = useStore();
  const user = store.getters.user;

  console.log('beforeEach', to.path + ' - Auth: ' + user.loggedIn)
  if ((to.path !== '/login' && to.path !== 'login') && !user.loggedIn) {
    next({path: '/login'})
  } else if ((to.path === '/login' || to.path === 'login') && user.loggedIn) {
    next({path: '/'})
  } else {
    next()
  }
})

export default router;
