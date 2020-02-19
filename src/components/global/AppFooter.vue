<template>
  <v-footer absolute color="#fff0" class="py-2">
    <div class="flex-grow-1"></div>
    <scroller-to-top></scroller-to-top>
  </v-footer>
</template>

<script>
import ScrollerToTop from "@/components/global/ScrollerToTop.vue";

export default {
  components: {
    ScrollerToTop
  }
};
</script>
