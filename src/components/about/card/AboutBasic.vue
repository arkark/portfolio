<template>
  <about-card :title="'プロフィール'">
    <p class="mb-2">
      <span v-for="badge in badges" :key="badge.key" class="mr-1">
        <a :href="badge.url" target="_blank" rel="noopener noreferrer">
          <img :src="badge.image" style="vertical-align: middle" />
        </a>
      </span>
    </p>
    <ul class="fa-ul body-1 ma-0">
      <li v-for="(info, index) in infos" :key="index">
        <span class="fa-li"><i :class="info.icon"></i></span>
        <span
          :style="{
            width: '5em',
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
    <v-divider class="my-1"></v-divider>
    <p class="mb-1">
      Math, CS, Game, Web / CTF / 競プロ / DとRustと回転が好きです。
    </p>
    <p v-for="(skill, index) in skills" :key="index" class="mb-0">
      <span class="font-weight-bold mr-1">{{ skill.key }}:</span>
      <span v-for="(value, i) in skill.values" :key="index + '-' + i">
        <a
          v-if="'url' in value"
          :href="value.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            :src="value.image"
            :width="skill.size + 'px'"
            class="vertical-middle"
          />
        </a>
        <img
          v-else
          :src="value.image"
          :width="skill.size + 'px'"
          class="vertical-middle"
        />
      </span>
    </p>
    <template #under-card>
      <v-row
        align="end"
        class="mr-2 body-2 text--secondary"
        :style="{
          fontSize: '0.6rem !important',
          height: 0,
        }"
      >
        <v-spacer></v-spacer>
        <span>
          <span>Resource: &copy;</span>
          <a href="https://github.com/vscode-icons/vscode-icons"
            >vscode-icons</a
          >
          <span> contributors</span>
        </span>
      </v-row>
    </template>
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
          key: "Blog",
          image: require("@/assets/shields/blog_link.svg"),
          url: "https://blog.arkark.dev",
        },
      ],
      skills: [
        {
          key: "Favorite",
          values: [
            { image: require("@/assets/icons/file_type_dlang.svg") },
            { image: require("@/assets/icons/file_type_rust.svg") },
          ],
          size: 28,
        },
        {
          key: "Sometimes",
          values: [
            { image: require("@/assets/icons/file_type_js_official.svg") },
            {
              image: require("@/assets/icons/file_type_typescript_official.svg"),
            },
            { image: require("@/assets/icons/file_type_vue.svg") },
            { image: require("@/assets/icons/file_type_reactjs.svg") },
            { image: require("@/assets/icons/file_type_kotlin.svg") },
            { image: require("@/assets/icons/file_type_python.svg") },
            { image: require("@/assets/icons/file_type_c3.svg") },
            { image: require("@/assets/icons/file_type_cpp3.svg") },
            { image: require("@/assets/icons/file_type_go.svg") },
            { image: require("@/assets/icons/file_type_jar.svg") },
            { image: require("@/assets/icons/file_type_scala.svg") },
            { image: require("@/assets/icons/file_type_processinglang.svg") },
            { image: require("@/assets/icons/file_type_ruby.svg") },
            { image: require("@/assets/icons/file_type_php.svg") },
            { image: require("@/assets/icons/file_type_prolog.svg") },
            { image: require("@/assets/icons/file_type_glsl.svg") },
          ],
          size: 20,
        },
        {
          key: "Tools",
          values: [
            {
              image: require("@/assets/icons/file_type_git.svg"),
              url:
                "https://github.com/arkark/dotfiles/blob/master/home/.gitconfig",
            },
            { image: require("@/assets/icons/file_type_docker.svg") },
            { image: require("@/assets/icons/file_type_mysql.svg") },
            { image: require("@/assets/icons/file_type_tex.svg") },
            { image: require("@/assets/icons/file_type_vscode.svg") },
          ],
          size: 20,
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
