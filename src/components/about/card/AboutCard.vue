<template>
  <div>
    <v-card flat>
      <v-card-title class="py-1 px-1">
        <h4>{{ title }}</h4>
      </v-card-title>
      <v-card-text class="pb-1 px-1 body-2 text--primary">
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
