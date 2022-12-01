import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Login from '@/views/auth/Login.vue';
import { useStore } from "@/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Page,
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: Dashboard,
        auth: true
      },
      {
        path: 'users',
        name: 'Users',
        component: Users,
        auth: true
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { layout: 'empty' },
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
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
    next({ path: '/login' })
  } else if ((to.path === '/login' || to.path === 'login') && user.loggedIn) {
    next({ path: '/' })
  } else {
    next()
  }
})

export default router;
