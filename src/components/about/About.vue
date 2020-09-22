<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <h2 class="mb-0 pl-4 font-weight-medium">About</h2>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <v-timeline align-top dense class="mr-8">
      <v-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :color="'grey darken-3'"
        fill-dot
      >
        <template v-slot:icon>
          <v-icon small dark>{{ item.icon }}</v-icon>
        </template>
        <component :is="item.component"></component>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import AboutBasic from "@/components/about/card/AboutBasic";
import AboutInterest from "@/components/about/card/AboutInterest";
import AboutSkill from "@/components/about/card/AboutSkill";
import AboutCtf from "@/components/about/card/AboutCtf";
import AboutCompro from "@/components/about/card/AboutCompro";
import AboutMarathon from "@/components/about/card/AboutMarathon";
import AboutArticle from "@/components/about/card/AboutArticle";
import AboutActivity from "@/components/about/card/AboutActivity";
import AboutIntern from "@/components/about/card/AboutIntern";

export default {
  data: function () {
    return {
      items: [
        {
          component: AboutBasic,
          icon: "fas fa-user",
        },
        {
          component: AboutInterest,
          icon: "fas fa-cogs",
        },
        {
          component: AboutSkill,
          icon: "fas fa-code-branch",
        },
        {
          component: AboutCtf,
          icon: "fas fa-shield-alt",
        },
        {
          component: AboutCompro,
          icon: "fas fa-code",
        },
        {
          component: AboutMarathon,
          icon: "fas fa-running",
        },
        {
          component: AboutArticle,
          icon: "fas fa-pen-nib",
        },
        {
          component: AboutActivity,
          icon: "fas fa-calendar-day",
        },
        {
          component: AboutIntern,
          icon: "fas fa-briefcase",
        },
      ],
    };
  },
  components: {
    AboutBasic,
    AboutInterest,
    AboutSkill,
    AboutCtf,
    AboutCompro,
    AboutMarathon,
    AboutArticle,
    AboutActivity,
    AboutIntern,
  },
};
</script>
