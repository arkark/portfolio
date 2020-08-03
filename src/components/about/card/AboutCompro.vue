<template>
  <about-card :title="'競技プログラミング'" :icon="'fas fa-code'">
    <p class="mb-1">
      <a
        href="https://atcoder.jp/user/arkark"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="atcoderBadge" class="vertical-middle" />
      </a>
    </p>
    <p class="mb-2">
      <img :src="projectEulerBadge" class="vertical-middle" width="160px" />
    </p>
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
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";
import BlogLinkIcon from "@/components/about/icon/BlogLinkIcon";
import comproList from "@/data/compro";

export default {
  data: function () {
    return {
      atcoderBadge: require("@/assets/shields/atcoder_rating.svg"),
      projectEulerBadge: require("@/assets/project_euler.png"),
      items: comproList,
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
