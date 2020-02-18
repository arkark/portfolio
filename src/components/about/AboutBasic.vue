<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-user</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">プロフィール</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <p v-for="(item, index) in items" :key="index" class="mb-0">
          <span
            :style="{
              width: '6em',
              display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block'
            }"
          >
            <v-icon small class="mx-1">{{ item.icon }}</v-icon>
            <span>{{ item.key }}</span>
          </span>
          ：<span>{{ item.value }}</span>
          <span v-if="'url' in item">
            <link-icon :url="item.url"></link-icon>
          </span>
        </p>
        <v-divider class="my-1"></v-divider>
        <p class="mb-1">
          Math, CS, Game, Web / 競プロ, CTF (misc, web) /
          DとRustと回転が好きです。
        </p>
        <p class="mb-1">
          <span v-if="$vuetify.breakpoint.width > 780" class="mr-2">
            <v-icon small>fas fa-angle-right</v-icon>
            <v-icon small>fas fa-angle-right</v-icon>
          </span>
          <span v-for="(badge, key) in badges" :key="key" class="mr-1">
            <a :href="badge.url" target="_blank" rel="noopener noreferrer">
              <img :src="badge.image" style="vertical-align: middle;" />
            </a>
          </span>
          <span v-if="$vuetify.breakpoint.width > 780" class="ml-2">
            <v-icon small>fas fa-angle-left</v-icon>
            <v-icon small>fas fa-angle-left</v-icon>
          </span>
        </p>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  data: function() {
    return {
      items: [
        {
          icon: "fas fa-user",
          key: "名前",
          value: "Takeshi Kaneko"
        },
        {
          icon: "fas fa-user-tag",
          key: "HN",
          value: "Ark / アーク"
        },
        {
          icon: "fas fa-graduation-cap",
          key: "所属",
          value: "東京工業大学 情報理工学院 数理・計算科学系"
        },
        {
          icon: "fas fa-users",
          key: "サークル",
          value: "東京工業大学デジタル創作同好会 traP",
          url: "https://trap.jp/"
        }
      ],
      badges: [
        {
          image: require("@/assets/shields/github_link.svg"),
          url: "https://github.com/arkark"
        },
        {
          image: require("@/assets/shields/twitter_link.svg"),
          url: "https://twitter.com/arkark_"
        },
        {
          image: require("@/assets/shields/hatenablog_link.svg"),
          url: "https://ark4rk.hatenablog.com/archive"
        },
        {
          image: require("@/assets/shields/atcoder_link.svg"),
          url: "https://atcoder.jp/user/arkark"
        },
        {
          image: require("@/assets/shields/shadertoy_link.svg"),
          url: "https://www.shadertoy.com/user/Ark"
        }
      ]
    };
  },
  components: {
    LinkIcon
  }
};
</script>
