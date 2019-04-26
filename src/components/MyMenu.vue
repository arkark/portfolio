<template>
  <v-speed-dial
    v-model="fab"
    top
    right
    direction="bottom"
    transition="scale-transition"
    fixed
    class="mr-2"
  >
    <v-hover slot="activator">
      <v-btn
        slot-scope="{ hover }"
        v-model="fab"
        color="blue darken-2"
        dark
        fab
        :class="`elevation-${hover ? 12 : 2}`"
        class="mb-2"
      >
        <v-icon>fas fa-bars</v-icon>
        <v-icon>fas fa-times</v-icon>
      </v-btn>
    </v-hover>

    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        dark
        :small="!hover"
        color="green"
        to="/"
        :class="`elevation-${hover ? 12 : 2}`"
        round
      >
        <v-icon size="18px">fas fa-home</v-icon><span>&nbsp;&nbsp;Top</span>
      </v-btn>
    </v-hover>

    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        dark
        :small="!hover"
        color="indigo"
        to="/works"
        :class="`elevation-${hover ? 12 : 2}`"
        round
      >
        <v-icon size="18px">fas fa-lightbulb</v-icon
        ><span>&nbsp;&nbsp;Works</span>
      </v-btn>
    </v-hover>

    <v-hover>
      <v-btn
        slot-scope="{ hover }"
        dark
        :small="!hover"
        color="red"
        to="/about"
        :class="`elevation-${hover ? 12 : 2}`"
        round
      >
        <v-icon size="18px">fas fa-address-card</v-icon
        ><span>&nbsp;&nbsp;About</span>
      </v-btn>
    </v-hover>
  </v-speed-dial>
</template>

<script>
export default {
  data: function() {
    return {
      fab: false,
      tooltips: false,
      tooltipsDisabled: true
    };
  },
  watch: {
    fab(val) {
      this.tooltips = false;
      this.tooltipsDisabled = false;
      if (val) {
        setTimeout(() => {
          this.tooltips = true;
          this.$nextTick(() => (this.tooltipsDisabled = true));
        }, 250);
      }
    }
  }
};
</script>
