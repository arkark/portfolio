<template>
  <v-container class="pa-2">
    <v-layout justify-center>
      <v-hover>
        <v-card
          :width="cardWidth"
          :height="cardHeight"
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2}`"
        >
          <v-container
            fill-height
            class="px-2 py-2"
            style="position: absolute; pointer-events: none;"
          >
            <v-layout fill-height column>
              <v-spacer></v-spacer>
              <v-flex class="text-xs-right pa-0" shrink>
                <v-chip small label disabled text-color="black">{{
                  formatDate(work.date)
                }}</v-chip>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container
            fill-height
            class="px-2 py-2"
            style="position: absolute; pointer-events: none;"
          >
            <v-layout fill-height column>
              <v-spacer></v-spacer>
              <v-flex class="text-xs-left" pa-0 shrink>
                <v-chip small outline label disabled text-color="black">
                  {{ work.group }}</v-chip
                >
              </v-flex>
            </v-layout>
          </v-container>
          <v-toolbar
            flat
            :height="imageHeight"
            color="rgba(0,0,0,0)"
            absolute
            style="pointer-events: none;"
          >
            <v-hover>
              <v-btn
                slot-scope="{ hover }"
                :href="work.url"
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
                small
                absolute
                bottom
                right
                fab
                :class="`elevation-${hover ? 8 : 2}`"
                style="pointer-events: auto;"
              >
                <v-icon>fas fa-external-link-alt</v-icon>
              </v-btn>
            </v-hover>
          </v-toolbar>
          <a :href="work.url" target="_blank" rel="noopener noreferrer">
            <v-img :src="work.src" width="100%" :height="imageHeight"> </v-img>
          </a>
          <v-card-title primary-title class="px-3 py-2">
            <h3 class="mb-0 pr-5">{{ work.title }}</h3>
          </v-card-title>
          <v-divider inset></v-divider>
          <v-card-text class="px-3 py-2">
            <span v-if="work.rawHtml === true" v-html="work.description"></span>
            <span v-else>
              {{ work.description }}
            </span>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-layout>
  </v-container>
</template>

<script>
import moment from "moment";

export default {
  data: function() {
    return {
      cardWidth: 240,
      cardHeight: 320,
      imageHeight: 160
    };
  },
  props: {
    work: Object
  },
  methods: {
    formatDate(date) {
      if (/.*\/.*\/.*/.test(date)) {
        return moment(date, "Y/M/D").format("ll");
      } else {
        return moment(date, "Y/M").format("MMM, Y");
      }
    }
  }
};
</script>

<style></style>
