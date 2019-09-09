<template>
  <v-speed-dial
    v-model="fab"
    top
    right
    direction="bottom"
    transition="scale-transition"
    fixed
    class="mr-5"
    :open-on-hover="hover"
  >
    <template v-slot:activator>
      <v-btn v-model="fab" color="blue darken-2" dark fab class="mb-2">
        <v-icon v-if="fab">fas fa-times</v-icon>
        <v-icon v-else>fas fa-bars</v-icon>
      </v-btn>
    </template>

    <v-btn dark color="green" to="/" rounded>
      <v-icon size="18px">fas fa-home</v-icon><span>&nbsp;&nbsp;Top</span>
    </v-btn>

    <v-btn dark color="indigo" to="/works" rounded>
      <v-icon size="18px">fas fa-lightbulb</v-icon
      ><span>&nbsp;&nbsp;Works</span>
    </v-btn>

    <v-btn dark color="red" to="/about" rounded>
      <v-icon size="18px">fas fa-address-card</v-icon
      ><span>&nbsp;&nbsp;About</span>
    </v-btn>
  </v-speed-dial>
</template>

<script>
export default {
  data: function() {
    return {
      hover: false,
      fab: false
    };
  }
};
</script>
