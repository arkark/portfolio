<template>
  <about-card :title="'Capture The Flag'">
    <p class="mb-1">
      Team:
      <a href="https://ctftime.org/team/80092">./Vespiary</a>
    </p>
    <ul class="fa-ul body-2 ma-0">
      <li v-for="(item, index) in items" :key="index" class="mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>{{ item.label }}</span>
        <span v-if="'blog' in item">
          <blog-link-icon :url="item.blog"></blog-link-icon>
        </span>
        <span v-if="'url' in item">
          <link-icon :url="item.url"></link-icon>
        </span>
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import ctfList from "@/data/ctf";

export default {
  data: function () {
    return {
      items: ctfList,
    };
  },
  components: {
    AboutCard,
    LinkIcon,
    BlogLinkIcon,
  },
};
</script>
