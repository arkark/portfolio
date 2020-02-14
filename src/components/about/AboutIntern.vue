<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-briefcase</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">インターン等</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <template v-for="(item, index) in items">
          <p class="mb-1" :key="index">
            <span>{{ item.label }}</span>
          </p>
          <p
            v-for="(subItem, subIndex) in item.children"
            :key="index + '-' + subIndex"
            class="ml-1 mb-1 body-2"
          >
            <itemize-icon></itemize-icon>
            <span>{{ subItem.label }}</span>
            <span v-if="'blog' in subItem">
              <blog-link-icon :url="subItem.blog"></blog-link-icon>
            </span>
            <span v-if="'url' in subItem">
              <link-icon :url="subItem.url"></link-icon>
            </span>
          </p>
        </template>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import internList from "@/data/intern";

export default {
  data: function() {
    return {
      items: internList
    };
  },
  components: {
    ItemizeIcon,
    LinkIcon,
    BlogLinkIcon
  }
};
</script>
