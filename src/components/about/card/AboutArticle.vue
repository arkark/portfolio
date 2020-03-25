<template>
  <about-card :title="'書いた記事'" :icon="'fas fa-pen-nib'">
    <p v-for="(item, index) in items" :key="index" class="mb-1 body-2">
      <itemize-icon></itemize-icon>
      <span class="caption">
        <code>{{ item.date }}</code>
        :
      </span>
      <span>{{ item.label }}</span>
      <span v-if="'blog' in item">
        <blog-link-icon :url="item.blog"></blog-link-icon>
      </span>
      <span v-if="'url' in item">
        <link-icon :url="item.url"></link-icon>
      </span>
    </p>
    <p class="mb-1">
      <span>その他の記事</span>
      <v-icon x-small class="mx-2">fas fa-arrow-right</v-icon>
      <a href="https://ark4rk.hatenablog.com">はてなブログ</a>
      /
      <a href="https://trap.jp/author/ark/">traP</a>
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import articleList from "@/data/article";

export default {
  data: function() {
    return {
      items: articleList
    };
  },
  components: {
    AboutCard,
    ItemizeIcon,
    LinkIcon,
    BlogLinkIcon
  }
};
</script>
