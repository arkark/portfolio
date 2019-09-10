<template>
  <v-app>
    <background></background>
    <my-menu></my-menu>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-content>
      <work></work>
    </v-content>
    <v-content>
      <about></about>
    </v-content>
  </v-app>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue";
import Background from "@/components/Background.vue";
import Work from "@/components/work/Work.vue";
import About from "@/components/about/About.vue";

export default {
  name: "App",
  components: {
    MyMenu,
    Background,
    Work,
    About
  },
  data() {
    return {};
  }
};
</script>

<style>
* {
  text-transform: none !important;
  word-break: normal !important;
}
</style>
