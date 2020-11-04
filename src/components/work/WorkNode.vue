<template>
  <v-hover>
    <v-card
      :width="cardWidth"
      :height="cardHeight"
      slot-scope="{ hover }"
      :class="{ 'elevation-3': hover }"
    >
      <v-toolbar
        text
        :width="cardWidth"
        :height="imageHeight"
        color="rgba(0,0,0,0)"
        absolute
        :elevation="0"
        style="pointer-events: none"
      >
        <v-hover>
          <v-btn
            :href="work.url"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
            x-small
            absolute
            bottom
            right
            fab
            style="pointer-events: auto"
          >
            <v-icon small>fas fa-external-link-alt</v-icon>
          </v-btn>
        </v-hover>
      </v-toolbar>
      <v-skeleton-loader
        v-if="!readyToLoad"
        boilerplate
        type="image"
        width="100%"
        :height="imageHeight"
      ></v-skeleton-loader>
      <a v-else :href="work.url" target="_blank" rel="noopener noreferrer">
        <v-img :src="work.src" width="100%" :height="imageHeight" eager>
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-2"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </a>
      <v-card-title class="subtitle-2 px-3 pt-1 pb-0">
        <span class="pr-10">{{ work.title }}</span>
      </v-card-title>
      <v-divider class="ml-2 mr-12"></v-divider>
      <v-card-text class="caption px-3 py-1">
        <span v-if="work.rawHtml === true" v-html="work.description"></span>
        <span v-else>{{ work.description }}</span>
      </v-card-text>
      <v-footer absolute :color="'#0000'" class="px-3 py-2 caption">
        <genre-chip :genre="work.genre"></genre-chip>
        <v-spacer></v-spacer>
        <v-chip
          small
          outlined
          label
          text-color="black"
          class="font-weight-reguler px-2"
          >{{ formatDate(work.date) }}</v-chip
        >
      </v-footer>
    </v-card>
  </v-hover>
</template>

<style scoped>
.theme--light.v-divider {
  border-width: thin 0 0 0;
}
</style>

<script>
import dayjs from "dayjs";
import GenreChip from "@/components/work/GenreChip";

export default {
  props: {
    work: {
      type: Object,
      required: true,
    },
    cardWidth: {
      type: Number,
      required: true,
    },
    cardHeight: {
      type: Number,
      required: true,
    },
    imageHeight: {
      type: Number,
      required: true,
    },
  },
  data: function () {
    return {
      readyToLoad: false,
    };
  },
  mounted: function () {
    if (document.readyState === "complete") {
      this.readyToLoad = true;
    } else {
      document.addEventListener("readystatechange", () => {
        if (document.readyState === "complete") {
          this.readyToLoad = true;
        }
      });
    }
  },
  methods: {
    formatDate(date) {
      if (/.*\/.*\/.*/.test(date)) {
        return dayjs(date, "YYYY/M/D").format("MMM, YYYY");
      } else {
        return dayjs(date, "YYYY/M").format("MMM D, YYYY");
      }
    },
  },
  components: {
    GenreChip,
  },
};
</script>
