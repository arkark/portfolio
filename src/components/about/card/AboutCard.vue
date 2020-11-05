<template>
  <div>
    <v-card flat>
      <v-card-title class="py-1 px-1">
        <span><span class="title-head"></span> {{ title }}</span>
      </v-card-title>
      <v-card-text class="pb-1 px-1 body-1 text--primary">
        <slot></slot>
      </v-card-text>
    </v-card>
  </div>
</template>

<style scoped>
.title-head {
  display: inline-block;
  background: #aaa;
  width: 0.65em;
  height: 0.65em;
  margin: 0.5em 0.25em 0 0.25em;
  box-sizing: border-box;
  vertical-align: top;
}
.title-head::before {
  content: "";
  position: relative;
  display: inline-block;
  background: #333f;
  width: 0.65em;
  height: 0.65em;
  top: -0.3em;
  left: -0.3em;
}
</style>

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
