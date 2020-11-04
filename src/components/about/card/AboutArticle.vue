<template>
  <about-card :title="'書いた記事'">
    <ul class="fa-ul body-2 ma-0">
      <li v-for="(item, index) in items" :key="index" class="mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>
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
      </li>
    </ul>
    <p class="body-2 mb-1">
      <span>その他の記事</span>
      <v-icon x-small class="mx-2">fas fa-arrow-right</v-icon>
      <a href="https://blog.arkark.dev">ブログ</a>
      /
      <a href="https://ark4rk.hatenablog.com">旧ブログ</a>
      /
      <a href="https://trap.jp/author/ark/">traP</a>
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import articleList from "@/data/article";

export default {
  data: function () {
    return {
      items: articleList,
    };
  },
  components: {
    AboutCard,
    LinkIcon,
    BlogLinkIcon,
  },
};
</script>
