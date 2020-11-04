<template>
  <about-card :title="'プログラミング'">
    <ul class="fa-ul body-2 ma-0">
      <li v-for="(skill, index) in skills" :key="index" class="mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span
          :style="{
            width: '5rem',
            display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block',
          }"
        >
          <span>{{ skill.key }}</span>
        </span>
        <span> : </span>
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
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";

export default {
  name: "about-skill",
  data: function () {
    return {
      skills: [
        {
          key: "Favorite",
          values: [
            { image: require("@/assets/icons/file_type_dlang.svg") },
            { image: require("@/assets/icons/file_type_rust.svg") },
            {
              image: require("@/assets/icons/file_type_typescript_official.svg"),
            },
          ],
          size: 20,
        },
        {
          key: "Sometimes",
          values: [
            { image: require("@/assets/icons/file_type_js_official.svg") },
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
  },
};
</script>
