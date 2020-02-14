<template>
  <v-btn
    :href="url"
    target="_blank"
    rel="noopener noreferrer"
    color="primary"
    icon
    text
    x-small
  >
    <v-icon size="12px">fas fa-external-link-alt</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      required: true
    }
  }
};
</script>
