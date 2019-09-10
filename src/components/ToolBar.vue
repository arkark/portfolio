<template>
  <v-app-bar dark color="#fff0" flat absolute>
    <div class="flex-grow-1"></div>

    <v-toolbar-items class="hidden-md-and-down">
      <v-btn
        text
        class="font-weight-bold"
        @click="$vuetify.goTo(parentRefs.work, options)"
      >
        Works
      </v-btn>
      <v-btn
        text
        class="font-weight-bold"
        @click="$vuetify.goTo(parentRefs.about, options)"
      >
        About
      </v-btn>
      <v-btn text class="font-weight-bold" href="https://github.com/ArkArk">
        GitHub
      </v-btn>
      <v-btn text class="font-weight-bold" href="https://twitter.com/arkark_">
        Twitter
      </v-btn>
      <v-btn text class="font-weight-bold" href="http://ark4rk.hatenablog.com">
        Blog
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items class="hidden-md-and-up">
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>fas fa-bars</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="$vuetify.goTo(parentRefs.work, options)">
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item>
          <v-list-item @click="$vuetify.goTo(parentRefs.about, options)">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://github.com/ArkArk">
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://twitter.com/arkark_">
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item>
          <v-list-item href="http://ark4rk.hatenablog.com">
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    parentRefs: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {};
  },
  computed: {
    options: function() {
      return {
        duration: 300,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  }
};
</script>

<style scoped></style>
