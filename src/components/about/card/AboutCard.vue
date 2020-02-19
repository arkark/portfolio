<template>
  <v-timeline-item :color="'grey darken-3'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>{{ icon }}</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">{{ title }}</v-card-title>
      <v-divider class="py-0 mx-3"></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <slot></slot>
      </v-card-text>
    </v-card>
    <slot name="under-card"></slot>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
};
</script>
