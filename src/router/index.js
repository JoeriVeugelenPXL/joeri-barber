import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/afspraak",
    name: "Afspraak",

    component: () => import("../views/Afspraak.vue"),
  },
  {
    path: "/contacteer",
    name: "Contacteer",

    component: () => import("../views/Contacteer.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
