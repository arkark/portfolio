<template>
  <about-card :title="'CTF'" :icon="'fas fa-shield-alt'">
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
    <p class="mb-1">
      過去の
      <a href="https://ark4rk.hatenablog.com/archive/category/CTF">
        writeup
      </a>
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import ctfList from "@/data/ctf";

export default {
  data: function() {
    return {
      items: ctfList
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
