<template>
  <about-card :title="'プロフィール'" :icon="'fas fa-user'">
    <p v-for="(item, index) in items" :key="index" class="mb-0">
      <span
        :style="{
          width: '6em',
          display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block',
        }"
      >
        <span
          :style="{
            width: '1.8em',
            display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block',
          }"
          class="text-center"
        >
          <v-icon small class="mx-1 text--primary">{{ item.icon }}</v-icon>
        </span>
        <span>{{ item.key }}</span>
      </span>
      ：
      <span>{{ item.value }}</span>
      <span v-if="'url' in item">
        <link-icon :url="item.url"></link-icon>
      </span>
    </p>
    <v-divider class="my-1"></v-divider>
    <p class="mb-1">
      Math, CS, Game, Web / CTF
      <a href="https://ctftime.org/team/80092">./Vespiary</a> / 競プロ /
      DとRustと回転が好きです。
    </p>
    <p class="mb-1">
      <span v-if="$vuetify.breakpoint.width > 780" class="mr-2">
        <v-icon small>fas fa-angle-right</v-icon>
        <v-icon small>fas fa-angle-right</v-icon>
      </span>
      <span v-for="badge in badges" :key="badge.key" class="mr-1">
        <a :href="badge.url" target="_blank" rel="noopener noreferrer">
          <img :src="badge.image" style="vertical-align: middle;" />
        </a>
      </span>
      <span v-if="$vuetify.breakpoint.width > 780" class="ml-2">
        <v-icon small>fas fa-angle-left</v-icon>
        <v-icon small>fas fa-angle-left</v-icon>
      </span>
    </p>
  </about-card>
</template>

<style scoped>
.theme--light.v-divider {
  border-width: thin 0 0 0;
  border-color: rgba(0, 0, 0, 0.12);
}
</style>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  name: "about-basic",
  data: function () {
    return {
      items: [
        {
          icon: "fas fa-user",
          key: "名前",
          value: "Takeshi Kaneko",
        },
        {
          icon: "fas fa-user-tag",
          key: "HN",
          value: "Ark / アーク",
        },
        {
          icon: "fas fa-graduation-cap",
          key: "所属",
          value: "東京工業大学 情報理工学院 数理・計算科学系",
        },
        {
          icon: "fas fa-users",
          key: "サークル",
          value: "東京工業大学デジタル創作同好会 traP",
          url: "https://trap.jp/",
        },
      ],
      badges: [
        {
          key: "GitHub",
          image: require("@/assets/shields/github_link.svg"),
          url: "https://github.com/arkark",
        },
        {
          key: "Twitter",
          image: require("@/assets/shields/twitter_link.svg"),
          url: "https://twitter.com/arkark_",
        },
        {
          key: "Hatena Blog",
          image: require("@/assets/shields/hatenablog_link.svg"),
          url: "https://ark4rk.hatenablog.com",
        },
        {
          key: "AtCoder",
          image: require("@/assets/shields/atcoder_link.svg"),
          url: "https://atcoder.jp/user/arkark",
        },
        {
          key: "Shadertoy",
          image: require("@/assets/shields/shadertoy_link.svg"),
          url: "https://www.shadertoy.com/user/Ark",
        },
      ],
    };
  },
  components: {
    AboutCard,
    LinkIcon,
  },
};
</script>
