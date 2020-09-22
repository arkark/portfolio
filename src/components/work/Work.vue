<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <h2 class="mb-0 pl-4 font-weight-medium">Works</h2>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <v-container v-if="isNarrow" class="px-8">
      <v-row>
        <v-col cols="12" class="pa-0">
          <v-row justify="center">
            <work-node
              v-for="(work, key) in workList"
              :key="key"
              :work="work"
              :cardWidth="210"
              :cardHeight="270"
              :imageHeight="140"
              class="ma-2"
            >
            </work-node>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-timeline v-else align-top dense small class="mr-8">
      <v-timeline-item :color="'grey darken-3'" hide-dot>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-row justify="center">
                <work-node
                  v-for="(work, key) in workList"
                  :key="key"
                  :work="work"
                  :cardWidth="210"
                  :cardHeight="270"
                  :imageHeight="140"
                  class="ma-2"
                >
                </work-node>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import workList from "@/data/work.js";
import WorkNode from "@/components/work/WorkNode.vue";

export default {
  data: function () {
    return {
      workList,
      genres: ["Game", "Tool", "Design", "PixelArt"],
    };
  },
  computed: {
    isNarrow: function () {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  components: {
    WorkNode,
  },
};
</script>
