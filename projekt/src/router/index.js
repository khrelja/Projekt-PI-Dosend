import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store";
import login from "@/views/Login.vue";
import categories from "@/views/Categories.vue";
import admin from "@/views/Admin.vue";
import lists from "@/views/Lists.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/login",
    name: "login",

    component: login,
    meta: {
      needsUser: false,
    },
  },
  {
    path: "/categories",
    name: "Categories",
    component: categories,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/lists",
    name: "lists",
    component: lists,
    meta: {
      needsUser: true,
    },
  },
  {
    path: "/search/:searchTerm",
    name: "search-results",
    component: categories,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const noUser = store.currentUser === null;
  console.log("Old route", from.name, "->", to.name, "User", store.currentUser);
  if (noUser && to.meta.needsUser) {
    console.log("Not Allowed");
    next("login");
  } else {
    next();
  }
});

export default router;
