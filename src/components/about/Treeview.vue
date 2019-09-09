<template>
  <div>
    <template v-if="depth === 0">
      <p v-for="item in items" :key="item.id">
        <treeview-node :item="item" :depth="depth"></treeview-node>
      </p>
    </template>
    <template v-else-if="depth === 1">
      <p v-for="item in items" :key="item.id" class="pl-6 ma-0">
        <treeview-node :item="item" :depth="depth"></treeview-node>
      </p>
    </template>
    <ul v-else>
      <li v-for="item in items" :key="item.id">
        <treeview-node :item="item" :depth="depth"></treeview-node>
      </li>
    </ul>
  </div>
</template>

<script>
import TreeviewNode from "@/components/about/TreeviewNode";

export default {
  name: "Treeview",
  props: {
    items: {
      type: Array,
      required: true
    },
    depth: {
      type: Number,
      default: 0
    }
  },
  components: {
    TreeviewNode
  }
};
</script>
