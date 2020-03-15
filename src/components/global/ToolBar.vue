<template>
  <v-app-bar dark color="#fff0" flat absolute>
    <div class="flex-grow-1"></div>

    <v-toolbar-items v-if="$vuetify.breakpoint.mdAndUp">
      <v-btn text class="font-weight-bold" @click="scroll(parentRefs.about)">
        About
      </v-btn>
      <v-btn text class="font-weight-bold" @click="scroll(parentRefs.work)">
        Works
      </v-btn>
      <v-btn text class="font-weight-bold" href="https://github.com/arkark">
        GitHub
      </v-btn>
      <v-btn text class="font-weight-bold" href="https://twitter.com/arkark_">
        Twitter
      </v-btn>
      <v-btn text class="font-weight-bold" href="https://ark4rk.hatenablog.com">
        Blog
      </v-btn>
    </v-toolbar-items>

    <v-toolbar-items v-else>
      <v-menu>
        <template v-slot:activator="{ on }">
          <v-btn dark icon v-on="on">
            <v-icon>fas fa-bars</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item @click="scroll(parentRefs.about)">
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
          <v-list-item @click="scroll(parentRefs.work)">
            <v-list-item-title>Works</v-list-item-title>
          </v-list-item>
          <v-list-item href="https://github.com/arkark">
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
  },
  methods: {
    scroll: function(target) {
      const hash = "#" + target.$el.id;
      this.$vuetify.goTo(target, this.options);
      if (hash !== window.location.hash) {
        this.$router.push({
          path: this.$route.path,
          hash: hash
        });
      }
    }
  }
};
</script>
