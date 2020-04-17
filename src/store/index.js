import Vue from "vue";
import Vuex from "vuex";
import workModule from "@/store/workModule";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    work: workModule,
  },
});
