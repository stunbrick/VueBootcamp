import { createRouter, createWebHistory } from 'vue-router';
import Home from "@/views/HomeView.vue";
import Manage from "@/views/ManageView.vue";
import useUserStore from "@/stores/user";
import Song from '@/views/SongView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/manage',
      name: 'manage',
      component: Manage,
      alias: '/manage-music',
      beforeEnter: (to, from, next) => {
        next();
      },
      meta: {
        requiresAuth: true,
      }
    },
    {
      name: 'song',
      path: '/song/:id',
      component: Song,
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' },
    },
  ],
  linkExactActiveClass: 'text-yellow-500',
});
router.beforeEach((to, from, next) => {
  console.log('Global Guard');
  console.log(to.meta);

  if (!to.meta.requiresAuth) {
    next();
  } else {
    const store = useUserStore();
    if (store.userLoggedIn) {
      next();
    } else {
      next({name: 'home'});
    }
  }
});


export default router
