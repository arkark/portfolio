<template>
  <v-row v-if="isNarrow">
    <v-col class="py-2 px-0">
      <slot></slot>
    </v-col>
  </v-row>
  <v-timeline-item
    v-else
    :color="'grey darken-3'"
    :fill-dot="icon !== ''"
    :hide-dot="icon === ''"
  >
    <template #icon>
      <v-icon small dark>{{ icon }}</v-icon>
    </template>
    <slot></slot>
  </v-timeline-item>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
  computed: {
    isNarrow: function () {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
