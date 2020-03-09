<template>
  <v-avatar size="112">
    <img
      :src="require('@/assets/ark.png')"
      :class="{ spinner: true, paused: isPaused }"
      @click="flip"
    />
  </v-avatar>
</template>

<script>
export default {
  data: function() {
    return {
      isPaused: true
    };
  },
  methods: {
    flip: function() {
      this.isPaused = !this.isPaused;
    }
  }
};
</script>

<style scoped>
.spinner {
  cursor: pointer;
  border-radius: 100%;
  animation: spin 0.8s linear infinite;
}

.paused {
  animation-play-state: paused;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
