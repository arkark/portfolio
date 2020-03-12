<template>
  <about-card :title="'プログラミング'" :icon="'fas fa-code-branch'">
    <template v-slot:under-card>
      <v-row
        align="end"
        class="mr-2 caption font-weight-medium text--secondary"
        style="font-size: 0.2rem !important;"
      >
        <v-spacer></v-spacer>
        <span>
          <span>Resource:&copy;</span>
          <a href="https://github.com/vscode-icons/vscode-icons">
            vscode-icons
          </a>
          <span>contributors</span>
        </span>
      </v-row>
    </template>
    <p v-for="(item, index) in items" :key="index" class="mb-0">
      <span class="font-weight-bold mr-1">{{ item.key }}:</span>
      <span v-for="(value, i) in item.values" :key="index + '-' + i">
        <a
          v-if="'url' in value"
          :href="value.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img :src="value.image" width="32px" class="vertical-middle" />
        </a>
        <img v-else :src="value.image" width="32px" class="vertical-middle" />
      </span>
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";

export default {
  data: function() {
    return {
      items: [
        {
          key: "Favorite",
          values: [
            { image: require("@/assets/icons/file_type_dlang.svg") },
            { image: require("@/assets/icons/file_type_rust.svg") }
          ]
        },
        {
          key: "Often",
          values: [
            { image: require("@/assets/icons/file_type_kotlin.svg") },
            { image: require("@/assets/icons/file_type_js_official.svg") },
            { image: require("@/assets/icons/file_type_vue.svg") },
            { image: require("@/assets/icons/file_type_python.svg") }
          ]
        },
        {
          key: "Sometimes",
          values: [
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
            { image: require("@/assets/icons/file_type_shell.svg") }
          ]
        },
        {
          key: "Useful",
          values: [
            {
              image: require("@/assets/icons/file_type_git.svg"),
              url:
                "https://github.com/arkark/dotfiles/blob/master/files/.gitconfig"
            },
            { image: require("@/assets/icons/file_type_docker.svg") },
            { image: require("@/assets/icons/file_type_mysql.svg") },
            { image: require("@/assets/icons/file_type_aws.svg") },
            { image: require("@/assets/icons/file_type_tex.svg") },
            { image: require("@/assets/icons/file_type_vscode.svg") }
          ]
        }
      ]
    };
  },
  components: {
    AboutCard
  }
};
</script>
