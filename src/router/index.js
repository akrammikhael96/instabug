import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const loggedIn = function () {
  if (localStorage.getItem("userLoggedIn") === null) {
    return false;
  } else {
    return true;
  }
}
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: {
        name: "LoginPage"
      }
    },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginView,
    },
    {
      path: "/welcome",
      name: "WelcomePage",

      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/WelcomeView.vue"),
    },
    {
      path: "/404",
      name: "404Page",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/404View.vue"),
    },
  ],
});



router.beforeEach((to, from, next) => {
  if (to.name !== 'LoginPage' && to.name !== 'WelcomePage' && to.name !== '404Page') {
    next({ name: '404Page' });
  } else if (to.name === 'WelcomePage' && !loggedIn()) {
    next({ name: 'LoginPage' });

  } else if (to.name === 'LoginPage' && loggedIn()) {
    next({ name: 'WelcomePage' });
  }
  else {
    next();
  }
});

export default router;
