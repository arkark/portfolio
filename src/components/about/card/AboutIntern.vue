<template>
  <about-card :title="'インターン等'">
    <template v-for="(item, index) in items">
      <p class="mb-1" :key="index">
        <span>{{ item.label }}</span>
      </p>
      <ul :key="index" class="fa-ul body-2 ma-0">
        <li
          v-for="(subItem, subIndex) in item.children"
          :key="index + '-' + subIndex"
          class="mb-1"
        >
          <span class="fa-li"><i class="fas fa-hashtag"></i></span>
          <span>{{ subItem.label }}</span>
          <span v-if="'blog' in subItem">
            <blog-link-icon :url="subItem.blog"></blog-link-icon>
          </span>
          <span v-if="'url' in subItem">
            <link-icon :url="subItem.url"></link-icon>
          </span>
        </li>
      </ul>
    </template>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
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
    LinkIcon,
    BlogLinkIcon,
  },
};
</script>
