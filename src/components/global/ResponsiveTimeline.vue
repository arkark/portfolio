<template>
  <v-container v-if="isNarrow" class="px-8">
    <slot></slot>
  </v-container>
  <v-timeline v-else align-top dense class="pr-8">
    <slot></slot>
  </v-timeline>
</template>

<script>
export default {
  computed: {
    isNarrow: function () {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
