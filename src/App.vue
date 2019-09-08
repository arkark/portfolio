<template>
  <v-app>
    <background></background>
    <my-menu></my-menu>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import MyMenu from "@/components/MyMenu.vue";
import Background from "@/components/Background.vue";

export default {
  name: "App",
  components: {
    MyMenu,
    Background
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
