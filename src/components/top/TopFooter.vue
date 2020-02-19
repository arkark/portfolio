<template>
  <v-footer absolute color="#fff0" class="py-2" dark>
    <div class="flex-grow-1"></div>
    <v-icon dark :size="fontSize" class="mx-1">
      far fa-copyright
    </v-icon>
    <span
      :style="{
        'font-size': fontSize
      }"
    >
      2015-2020 Ark
    </span>
    <v-btn
      v-if="!this.$vuetify.breakpoint.xsOnly"
      href="https://github.com/arkark/arkark.github.io"
      target="_blank"
      rel="noopener noreferrer"
      icon
      text
      x-small
      class="ml-1"
    >
      <v-icon :size="fontSize">fas fa-code</v-icon>
    </v-btn>
  </v-footer>
</template>

<script>
export default {
  computed: {
    fontSize: function() {
      return this.$vuetify.breakpoint.xsOnly ? "0.6rem" : "0.875rem";
    }
  }
};
</script>
