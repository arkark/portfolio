<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-calendar-day</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">活動</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <p class="mb-0">
          <span>TTPC</span>
        </p>
        <p class="ml-1 mb-0 body-2">
          <itemize-icon></itemize-icon>
          <span>東京工業大学プログラミングコンテスト2019：運営・作問</span>
          <span>
            <v-btn
              href="https://atcoder.jp/contests/ttpc2019"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              icon
              text
              small
            >
              <v-icon size="12px">fas fa-external-link-alt</v-icon>
            </v-btn>
          </span>
        </p>
        <p class="mb-0">
          <span>GAME<sup>3</sup></span>
          <span>
            <v-btn
              href="https://game3.trap.jp"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              icon
              text
              small
            >
              <v-icon size="12px">fas fa-external-link-alt</v-icon>
            </v-btn>
          </span>
        </p>
        <p class="ml-1 mb-0 body-2">
          <itemize-icon></itemize-icon>
          <span>第4回ゲーム製作者交流会GAME<sup>3</sup>：運営</span>
        </p>
        <p class="ml-1 mb-0 body-2">
          <itemize-icon></itemize-icon>
          <span>第3回ゲーム製作者交流会GAME<sup>3</sup>：運営</span>
        </p>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import ItemizeIcon from "@/components/about/ItemizeIcon";

export default {
  components: { ItemizeIcon }
};
</script>
