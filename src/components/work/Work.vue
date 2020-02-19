<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <p class="display-1 mb-0 pl-4 font-weight-medium">
        Works
      </p>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <v-timeline align-top dense class="mr-8">
      <v-timeline-item :color="'grey darken-3'" hide-dot>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-row justify="center">
                <work-node
                  v-for="(work, key) in mainWorkList"
                  :key="key"
                  :work="work"
                  :cardWidth="240"
                  :cardHeight="310"
                  :imageHeight="160"
                  class="my-2 mx-3"
                >
                </work-node>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-timeline-item>
      <v-timeline-item :color="'grey darken-3'" hide-dot>
        <v-container class="pa-0">
          <v-row>
            <v-col cols="12" class="pa-0">
              <v-row justify="center">
                <work-node
                  v-for="(work, key) in workList"
                  :key="key"
                  :work="work"
                  :cardWidth="200"
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
import mainWorkList from "@/data/main_work.js";
import workList from "@/data/work.js";
import WorkNode from "@/components/work/WorkNode.vue";

export default {
  data: function() {
    return {
      mainWorkList,
      workList,
      genres: ["Game", "Tool", "Design", "PixelArt"]
    };
  },
  components: {
    WorkNode
  }
};
</script>

<style></style>
