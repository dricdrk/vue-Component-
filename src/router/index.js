import { createRouter, createWebHistory } from "vue-router";
import dragableComponent from "../components/dragableComponent.vue";
import import_csv from "../components/importcsv.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: dragableComponent,
    },
    {
      path: "/import",
      name: "import",
      component: import_csv,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
  ],
});

export default router;
