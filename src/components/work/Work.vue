<template>
  <div>
    <v-card-title primary-title class="px-3 pt-2 pb-0">
      <p class="display-1 mb-0 pl-2 font-weight-medium">
        Works
      </p>
    </v-card-title>
    <v-card-text class="pt-1 pb-2">
      <v-divider></v-divider>
    </v-card-text>
    <v-container class="px-3 py-0">
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <work-node
              v-for="(work, key) in mainWorkList"
              :key="key"
              :work="work"
              :cardWidth="240"
              :cardHeight="310"
              :imageHeight="160"
              class="ma-2"
            >
            </work-node>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="px-3 py-0">
      <v-row>
        <v-col cols="12">
          <v-row justify="center">
            <work-node
              v-for="(work, key) in workList"
              :key="key"
              :work="work"
              :cardWidth="225"
              :cardHeight="280"
              :imageHeight="150"
              class="ma-2"
            >
            </work-node>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
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
      workList
    };
  },
  components: {
    WorkNode
  }
};
</script>

<style></style>
