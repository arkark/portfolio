<template>
  <div class="subheading">
    <span
      v-if="item.hasOwnProperty('icon')"
      style="display: inline-block; text-align: center; width: 1.4em;"
    >
      <v-icon small>
        {{ item.icon }}
      </v-icon>
    </span>
    {{ item.name }}
    <span v-if="item.hasOwnProperty('url')">
      <v-btn
        :href="item.url"
        color="primary"
        icon
        flat
        small
        class="mx-1 my-0"
        style="position: absolute;"
      >
        <v-icon size="16px">fas fa-external-link-alt</v-icon>
      </v-btn>
    </span>
    <v-dialog v-if="item.hasOwnProperty('src')" width="500">
      <v-btn
        slot="activator"
        :href="item.url"
        color="primary"
        icon
        flat
        small
        class="mx-1 my-0"
      >
        <v-icon size="16px">fas fa-expand</v-icon>
      </v-btn>
      <v-card>
        <v-img :src="item.src"></v-img>
      </v-card>
    </v-dialog>
    <treeview
      v-if="item.hasOwnProperty('children')"
      :items="item.children"
      :depth="depth + 1"
    ></treeview>
  </div>
</template>

<script>
export default {
  name: "TreeviewNode",
  props: {
    item: Object,
    depth: Number
  },
  components: {
    Treeview: () => import("@/components/about/Treeview")
  }
};
</script>
