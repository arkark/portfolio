<template>
  <v-app>
    <background></background>
    <tool-bar :parentRefs="this.$refs"></tool-bar>
    <v-content>
      <top ref="top"></top>
    </v-content>
    <v-content>
      <work ref="work"></work>
    </v-content>
    <v-content>
      <about ref="about"></about>
    </v-content>
  </v-app>
</template>

<script>
import Background from "@/components/Background.vue";
import ToolBar from "@/components/ToolBar.vue";
import Top from "@/components/top/Top.vue";
import Work from "@/components/work/Work.vue";
import About from "@/components/about/About.vue";

export default {
  name: "App",
  components: {
    Background,
    ToolBar,
    Top,
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
