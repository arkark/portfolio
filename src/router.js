import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "top",
      component: () => import("@/components/top/Top.vue")
    },
    {
      path: "/works",
      name: "works",
      component: () => import("@/components/work/Work.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/components/about/About.vue")
    }
  ]
});
