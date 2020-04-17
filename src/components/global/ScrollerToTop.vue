<template>
  <v-btn class="mx-4" icon @click="gotoTop">
    <v-icon>fas fa-chevron-up</v-icon>
  </v-btn>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  computed: {
    options: function () {
      return {
        duration: 600,
        offset: 0,
        easing: "easeInOutCubic",
      };
    },
  },
  methods: {
    gotoTop: function () {
      this.$vuetify.goTo(0, this.options);
    },
  },
};
</script>
