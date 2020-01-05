<template>
  <span :class="depth === 0 ? 'title mt-2' : 'subtitle-1'">
    <span
      v-if="'icon' in item"
      style="display: inline-block; text-align: center; width: 1.4em;"
    >
      <v-icon small>
        {{ item.icon }}
      </v-icon>
    </span>
    <span v-if="item.rawHtml === true" v-html="item.label"></span>
    <span v-else>
      {{ item.label }}
    </span>
    <span v-if="'url' in item">
      <v-btn
        :href="item.url"
        target="_blank"
        rel="noopener noreferrer"
        color="primary"
        icon
        text
        small
      >
        <v-icon size="12px">fas fa-external-link-alt</v-icon>
      </v-btn>
    </span>
    <v-dialog v-if="'src' in item" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" icon text small v-on="on">
          <v-icon size="12px">fas fa-expand</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-img :src="item.src"></v-img>
      </v-card>
    </v-dialog>
    <v-img v-show="false" :src="item.src"></v-img>
    <treeview
      v-if="'children' in item"
      :items="item.children"
      :depth="depth + 1"
    ></treeview>
  </span>
</template>

<script>
export default {
  name: "TreeviewNode",
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: true
    }
  },
  components: {
    Treeview: () => import("@/components/about/Treeview")
  }
};
</script>
