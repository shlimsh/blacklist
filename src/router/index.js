import { createRouter, createWebHistory } from 'vue-router';
import Home from '../App.vue';
import UserForm from '../components/UserForm.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/user-form',
    name: 'UserForm',
    component: UserForm,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard to check if the user is authenticated
router.beforeEach((to, from, next) => {
  // If the route requires authentication and the user is not logged in, redirect to login page
  if (to.meta.requiresAuth && !localStorage.getItem('token')) {
    next('/login');
  } else {
    next();
  }
});

export default router;
