<template>
  <about-card :title="'インターン等'">
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
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import internList from "@/data/intern";

export default {
  data: function () {
    return {
      items: internList,
    };
  },
  components: {
    AboutCard,
    ItemizeIcon,
    LinkIcon,
    BlogLinkIcon,
  },
};
</script>
