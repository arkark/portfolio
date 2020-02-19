<template>
  <v-chip
    :small="!xSmall"
    :x-small="xSmall"
    :color="isSelected ? 'secondary' : 'default'"
    :outlined="!isSelected"
    class="font-weight-medium"
    @click="select"
    >{{ genre }}</v-chip
  >
</template>

<script>
export default {
  props: {
    genre: {
      type: String,
      required: true
    },
    "x-small": {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isSelected: function() {
      return this.$store.state.work.selectedGenres.has(this.genre);
    }
  },
  methods: {
    select: function() {
      if (this.isSelected) {
        this.$store.commit("work/unselectGenre", this.genre);
      } else {
        this.$store.commit("work/selectGenre", this.genre);
      }
    }
  }
};
</script>
