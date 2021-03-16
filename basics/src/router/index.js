import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/login.vue";
import Register from "../views/register.vue";
import FindPassword from "../views/findPassword.vue";
import Secret from "../views/secret.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/findPassword",
    name: "FindPass",
    component: FindPassword
  },
  {
    path: "/secret",
    name: "Secret",
    component: Secret,
    meta:{
      auth:true
    }
  },
  {
    path: "/game",
    name: "game",
    component: test,
    meta:{
      auth:true
    }
  },
  {
    path: "/test",
    name: "test",
    component: test
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
