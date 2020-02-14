<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-running</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">マラソンマッチ</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <p v-for="(item, index) in items" :key="index" class="mb-1 body-2">
          <itemize-icon></itemize-icon>
          <span>{{ item.label }}</span>
          <span v-if="'blog' in item">
            <blog-link-icon :url="item.blog"></blog-link-icon>
          </span>
          <span v-if="'url' in item">
            <link-icon :url="item.url"></link-icon>
          </span>
        </p>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import marathonList from "@/data/marathon";

export default {
  data: function() {
    return {
      items: marathonList
    };
  },
  components: {
    ItemizeIcon,
    LinkIcon,
    BlogLinkIcon
  }
};
</script>
