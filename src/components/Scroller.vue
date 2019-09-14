<template>
  <v-footer padless absolute color="#fff0" class="py-2">
    <div class="flex-grow-1"></div>
    <v-btn class="mx-4" icon @click="$vuetify.goTo(0, options)">
      <v-icon>fas fa-chevron-up</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  computed: {
    options: function() {
      return {
        duration: 600,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  }
};
</script>

<style scoped></style>
