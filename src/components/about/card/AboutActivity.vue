<template>
  <about-card :title="'活動'">
    <p class="mb-1">
      <span>TTPC</span>
    </p>
    <p class="ml-1 mb-1 body-2">
      <itemize-icon></itemize-icon>
      <span>東京工業大学プログラミングコンテスト2019：運営・作問</span>
      <span>
        <link-icon :url="'https://atcoder.jp/contests/ttpc2019'"></link-icon>
      </span>
    </p>
    <p class="mb-1">
      <span>GAME<sup>3</sup></span>
      <span>
        <link-icon :url="'https://game3.trap.jp'"></link-icon>
      </span>
    </p>
    <p class="ml-1 mb-1 body-2">
      <itemize-icon></itemize-icon>
      <span>第4回ゲーム製作者交流会GAME<sup>3</sup>：運営</span>
    </p>
    <p class="ml-1 mb-1 body-2">
      <itemize-icon></itemize-icon>
      <span>第3回ゲーム製作者交流会GAME<sup>3</sup>：運営</span>
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import ItemizeIcon from "@/components/about/icon/ItemizeIcon";
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  components: {
    AboutCard,
    ItemizeIcon,
    LinkIcon,
  },
};
</script>
