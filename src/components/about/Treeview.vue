<template>
  <ul>
    <li v-for="item in items" :key="item.id" class="py-1">
      <treeview-node :item="item" :depth="depth"></treeview-node>
    </li>
  </ul>
</template>

<script>
import TreeviewNode from "@/components/about/TreeviewNode";

export default {
  name: "Treeview",
  props: {
    items: Array,
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
