<template>
  <about-card :title="'活動'">
    <p class="mb-1">
      <span>TTPC</span>
    </p>
    <ul class="fa-ul body-2 ma-0">
      <li class="ml-1 mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>東京工業大学プログラミングコンテスト2019 : 運営</span>
        <span>
          <link-icon :url="'https://atcoder.jp/contests/ttpc2019'"></link-icon>
        </span>
      </li>
    </ul>
    <p class="mb-1">
      <span>GAME<sup>3</sup></span>
      <span>
        <link-icon :url="'https://game3.trap.jp'"></link-icon>
      </span>
    </p>
    <ul class="fa-ul body-2 ma-0">
      <li class="ml-1 mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>第4回ゲーム製作者交流会GAME<sup>3</sup> : 運営</span>
      </li>
      <li class="ml-1 mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>第3回ゲーム製作者交流会GAME<sup>3</sup> : 運営</span>
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  components: {
    AboutCard,
    LinkIcon,
  },
};
</script>
