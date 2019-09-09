<template>
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
          <v-flex class="text-right pa-0" shrink>
            <v-chip small label text-color="black">{{
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
          <v-flex class="text-left" pa-0 shrink>
            <v-chip small outlined label text-color="black">
              {{ work.group }}
            </v-chip>
          </v-flex>
        </v-layout>
      </v-container>
      <v-toolbar
        text
        :width="cardWidth"
        :height="imageHeight"
        color="rgba(0,0,0,0)"
        absolute
        :elevation="0"
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
            <v-icon small>fas fa-external-link-alt</v-icon>
          </v-btn>
        </v-hover>
      </v-toolbar>
      <a :href="work.url" target="_blank" rel="noopener noreferrer">
        <v-img :src="work.src" width="100%" :height="imageHeight"> </v-img>
      </a>
      <v-card-title class="subtitle-1 font-weight-medium px-3 pt-1 pb-0">
        <span class="pr-12">{{ work.title }}</span>
      </v-card-title>
      <v-divider inset></v-divider>
      <v-card-text class="body-2 font-weight-medium px-3 py-2">
        <span v-if="work.rawHtml === true" v-html="work.description"></span>
        <span v-else>
          {{ work.description }}
        </span>
      </v-card-text>
    </v-card>
  </v-hover>
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
    work: {
      type: Object,
      required: true
    }
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
