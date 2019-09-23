<template>
  <v-app>
    <background></background>
    <tool-bar :parentRefs="this.$refs"></tool-bar>
    <v-content class="mb-10">
      <top ref="top"></top>
    </v-content>
    <v-content>
      <work id="work" ref="work"></work>
    </v-content>
    <v-content>
      <about id="about" ref="about"></about>
    </v-content>
    <scroller-to-top></scroller-to-top>
  </v-app>
</template>

<script>
import Background from "@/components/Background.vue";
import ToolBar from "@/components/ToolBar.vue";
import ScrollerToTop from "@/components/ScrollerToTop.vue";
import Top from "@/components/top/Top.vue";
import Work from "@/components/work/Work.vue";
import About from "@/components/about/About.vue";

export default {
  name: "App",
  components: {
    Background,
    ToolBar,
    ScrollerToTop,
    Top,
    Work,
    About
  }
};
</script>

<style>
* {
  text-transform: none !important;
  word-break: normal !important;
}
</style>
