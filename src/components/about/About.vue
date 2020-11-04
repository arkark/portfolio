<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <h2 class="mb-0 pl-4 font-weight-medium">About</h2>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <responsive-timeline>
      <responsive-timeline-item
        v-for="(item, index) in items"
        :key="index"
        :icon="item.icon"
      >
        <component :is="item.component"></component>
      </responsive-timeline-item>
    </responsive-timeline>
  </div>
</template>

<script>
import ResponsiveTimeline from "@/components/global/ResponsiveTimeline";
import ResponsiveTimelineItem from "@/components/global/ResponsiveTimelineItem";
import AboutBasic from "@/components/about/card/AboutBasic";
import AboutSkill from "@/components/about/card/AboutSkill";
import AboutInterest from "@/components/about/card/AboutInterest";
import AboutCtf from "@/components/about/card/AboutCtf";
import AboutIsucon from "@/components/about/card/AboutIsucon";
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
          component: AboutSkill,
          icon: "fas fa-code-branch",
        },
        {
          component: AboutInterest,
          icon: "fas fa-cogs",
        },
        {
          component: AboutCtf,
          icon: "fas fa-shield-alt",
        },
        {
          component: AboutIsucon,
          icon: "fas fa-bolt",
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
    ResponsiveTimeline,
    ResponsiveTimelineItem,
    AboutBasic,
    AboutInterest,
    AboutCtf,
    AboutIsucon,
    AboutCompro,
    AboutMarathon,
    AboutArticle,
    AboutActivity,
    AboutIntern,
  },
};
</script>
