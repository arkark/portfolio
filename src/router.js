import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      path: "/",
      name: "top"
    },
    {
      path: "*",
      redirect: { name: "top" }
    }
  ],
  scrollBehavior(_to, _from, _savedPosition) {
    const selector = window.location.hash;
    return selector !== "" ? { selector } : { x: 0, y: 0 };
  }
});
