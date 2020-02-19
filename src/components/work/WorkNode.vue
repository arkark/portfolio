<template>
  <v-hover>
    <v-card
      :width="cardWidth"
      :height="cardHeight"
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 5 : 3}`"
    >
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
            x-small
            absolute
            bottom
            right
            fab
            :class="`elevation-${hover ? 4 : 2}`"
            style="pointer-events: auto;"
          >
            <v-icon small>fas fa-external-link-alt</v-icon>
          </v-btn>
        </v-hover>
      </v-toolbar>
      <a :href="work.url" target="_blank" rel="noopener noreferrer">
        <v-img :src="work.src" width="100%" :height="imageHeight"> </v-img>
      </a>
      <v-card-title class="subtitle-2 font-weight-medium px-3 pt-1 pb-0">
        <span class="pr-10">{{ work.title }}</span>
      </v-card-title>
      <v-divider
        class="ml-2 mr-12"
        style="border-width: thin 0 0 0;"
      ></v-divider>
      <v-card-text class="caption px-3 py-1">
        <span v-if="work.rawHtml === true" v-html="work.description"></span>
        <span v-else>
          {{ work.description }}
        </span>
      </v-card-text>
      <v-footer absolute :color="'#0000'" class="px-3 py-2 caption">
        <v-chip small outlined label text-color="black">
          {{ work.group }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-chip small outlined label text-color="black">{{
          formatDate(work.date)
        }}</v-chip>
      </v-footer>
    </v-card>
  </v-hover>
</template>

<script>
import moment from "moment";

export default {
  props: {
    work: {
      type: Object,
      required: true
    },
    cardWidth: {
      type: Number,
      required: true
    },
    cardHeight: {
      type: Number,
      required: true
    },
    imageHeight: {
      type: Number,
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
