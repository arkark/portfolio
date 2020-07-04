<template>
  <v-timeline-item :color="'grey darken-3'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>{{ icon }}</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">
        <span><span class="title-head"></span> {{ title }}</span>
      </v-card-title>
      <v-divider class="py-0 mx-3"></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <slot></slot>
      </v-card-text>
    </v-card>
    <slot name="under-card"></slot>
  </v-timeline-item>
</template>

<style scoped>
.title-head {
  display: inline-block;
  background: #aaa;
  width: 0.65em;
  height: 0.65em;
  margin: 0.25em 0.25em 0 0.25em;
  box-sizing: border-box;
  vertical-align: top;
}
.title-head::before {
  content: "";
  position: relative;
  display: inline-block;
  background: #333f;
  width: 0.65em;
  height: 0.65em;
  top: -0.3em;
  left: -0.3em;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
