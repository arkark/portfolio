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
    <app-footer></app-footer>
  </v-app>
</template>

<style>
* {
  text-transform: none !important;
  word-break: normal !important;
}

.theme--light.v-divider {
  border-width: thin;
  border-color: rgba(0, 0, 0, 0.4);
}

.theme--light.v-timeline:before {
  background: rgba(0, 0, 0, 0.2);
}

.vertical-middle {
  vertical-align: middle;
}
</style>

<script>
import Background from "@/components/global/Background.vue";
import ToolBar from "@/components/global/ToolBar.vue";
import AppFooter from "@/components/global/AppFooter.vue";
import Top from "@/components/top/Top.vue";
import About from "@/components/about/About.vue";
import Work from "@/components/work/Work.vue";

export default {
  name: "App",
  components: {
    Background,
    ToolBar,
    AppFooter,
    Top,
    About,
    Work,
  },
};
</script>
