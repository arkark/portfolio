<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card color="rgba(255, 255, 255, 0.9)" class="elevation-6 pa-2">
        <v-card-title primary-title class="px-3 py-2">
          <p class="display-1 mb-0 pl-2">
            <v-icon large>fas fa-lightbulb</v-icon>&nbsp;&nbsp;Works
          </p>
        </v-card-title>
        <v-card-text class="px-3 py-0">
          <div class="pl-2">今までつくってきたものとか（新しい順）</div>
        </v-card-text>
        <v-card-text>
          <v-divider></v-divider>
        </v-card-text>
        <v-container class="pa-3">
          <v-row>
            <v-col cols="12">
              <v-row justify="center">
                <v-flex v-for="(work, key) in workList" :key="key" row>
                  <work-node :work="work"></work-node>
                </v-flex>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import workList from "@/data/work.js";
import WorkNode from "@/components/work/WorkNode.vue";

export default {
  data: function() {
    return {
      workList
    };
  },
  components: {
    WorkNode
  }
};
</script>

<style></style>
