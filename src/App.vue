<template>
  <v-app>
    <background></background>
    <tool-bar :parentRefs="this.$refs"></tool-bar>
    <top ref="top"></top>
    <v-container>
      <v-row align="center" justify="center">
        <v-card flat :max-width="980">
          <about id="about" ref="about"></about>
          <work id="work" ref="work"></work>
        </v-card>
      </v-row>
    </v-container>
    <scroller-to-top></scroller-to-top>
  </v-app>
</template>

<script>
import Background from "@/components/Background.vue";
import ToolBar from "@/components/ToolBar.vue";
import ScrollerToTop from "@/components/ScrollerToTop.vue";
import Top from "@/components/top/Top.vue";
import About from "@/components/about/About.vue";
import Work from "@/components/work/Work.vue";

export default {
  name: "App",
  components: {
    Background,
    ToolBar,
    ScrollerToTop,
    Top,
    About,
    Work
  }
};
</script>

<style>
* {
  text-transform: none !important;
  word-break: normal !important;
}
</style>
