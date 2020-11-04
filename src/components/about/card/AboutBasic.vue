<template>
  <about-card :title="'プロフィール'">
    <ul class="fa-ul ml-0 mb-2">
      <li v-for="(info, index) in infos" :key="index">
        <span class="fa-li"><i :class="info.icon"></i></span>
        <span
          :style="{
            width: '5rem',
            display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block',
          }"
        >
          <span>{{ info.key }}</span>
        </span>
        <span> : </span>
        <span>{{ info.value }}</span>
        <span v-if="'url' in info">
          <link-icon :url="info.url"></link-icon>
        </span>
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  name: "about-basic",
  data: function () {
    return {
      infos: [
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
    };
  },
  components: {
    AboutCard,
    LinkIcon,
  },
};
</script>
