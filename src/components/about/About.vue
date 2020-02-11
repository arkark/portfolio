<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-card flat :max-width="1024">
        <v-card-title primary-title class="px-3 pt-2 pb-0">
          <p class="display-1 mb-0 pl-2">
            <v-icon large>fas fa-address-card</v-icon>&nbsp;&nbsp;About
          </p>
        </v-card-title>
        <v-card-text class="py-2">
          <v-divider></v-divider>
        </v-card-text>
        <v-timeline align-top dense class="mr-8">
          <about-basic></about-basic>
          <about-interest></about-interest>
          <about-skill></about-skill>
          <about-compro></about-compro>
          <about-marathon></about-marathon>
          <about-ctf></about-ctf>
          <about-activity></about-activity>
          <about-intern></about-intern>
        </v-timeline>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import AboutBasic from "@/components/about/AboutBasic";
import AboutInterest from "@/components/about/AboutInterest";
import AboutSkill from "@/components/about/AboutSkill";
import AboutCompro from "@/components/about/AboutCompro";
import AboutMarathon from "@/components/about/AboutMarathon";
import AboutCtf from "@/components/about/AboutCtf";
import AboutActivity from "@/components/about/AboutActivity";
import AboutIntern from "@/components/about/AboutIntern";

export default {
  components: {
    AboutBasic,
    AboutInterest,
    AboutSkill,
    AboutCompro,
    AboutMarathon,
    AboutCtf,
    AboutActivity,
    AboutIntern
  }
};
</script>
