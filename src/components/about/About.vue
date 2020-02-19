<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <p class="display-1 mb-0 pl-4 font-weight-medium">
        About
      </p>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <v-timeline align-top dense class="mr-8">
      <about-basic></about-basic>
      <about-interest></about-interest>
      <about-skill></about-skill>
      <about-compro></about-compro>
      <about-marathon></about-marathon>
      <about-ctf></about-ctf>
      <about-article></about-article>
      <about-activity></about-activity>
      <about-intern></about-intern>
    </v-timeline>
  </div>
</template>

<script>
import AboutBasic from "@/components/about/card/AboutBasic";
import AboutInterest from "@/components/about/card/AboutInterest";
import AboutSkill from "@/components/about/card/AboutSkill";
import AboutCompro from "@/components/about/card/AboutCompro";
import AboutMarathon from "@/components/about/card/AboutMarathon";
import AboutCtf from "@/components/about/card/AboutCtf";
import AboutArticle from "@/components/about/card/AboutArticle";
import AboutActivity from "@/components/about/card/AboutActivity";
import AboutIntern from "@/components/about/card/AboutIntern";

export default {
  components: {
    AboutBasic,
    AboutInterest,
    AboutSkill,
    AboutCompro,
    AboutMarathon,
    AboutCtf,
    AboutArticle,
    AboutActivity,
    AboutIntern
  }
};
</script>
