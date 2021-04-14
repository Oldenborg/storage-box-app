import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/firebase";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/secure-area",
    name: "SecureArea",
    meta: {
      auth: true
    },
    component: () =>
      import(/* webpackChunkName: "secure-area" */ "../views/SecureArea.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.auth);

  if (!requiresAuth) {
    next();
    return;
  }

  // Redirect to login
  if (!auth.currentUser) {
    console.log("ROUTE GUARD:", "USER NOT LOGGED IN");
    next("/");
    return;
  }

  next();
  return;
});

export default router;
