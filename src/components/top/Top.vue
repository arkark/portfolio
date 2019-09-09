<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-card width="420" color="rgba(255, 255, 255, 0.9)" class="elevation-6">
        <v-container class="pa-6" align-center justify-center>
          <p class="text-center display-1 font-weight-medium mb-1">
            Ark's page
          </p>
          <p class="text-center mb-2">
            I <v-icon small>favorite</v-icon> creating something!
          </p>
          <v-divider class="py-1"></v-divider>
          <v-layout class="ma-1 pa-0">
            <ark-icon></ark-icon>
          </v-layout>
          <p class="text-center font-weight-medium text--secondary mb-1">
            Mathematics / Computer Science / Programming
          </p>
          <v-layout align-center justify-center>
            <v-btn
              v-for="(account, key) in accountList"
              :key="key"
              fab
              text
              small
              class="mx-2 my-1"
              :href="account.url"
            >
              <v-icon large>{{ account.iconName }}</v-icon>
            </v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import ArkIcon from "@/components/top/ArkIcon.vue";

export default {
  data: function() {
    return {
      accountList: [
        {
          url: "https://github.com/ArkArk",
          iconName: "fab fa-github"
        },
        {
          url: "https://twitter.com/arkark_",
          iconName: "fab fa-twitter"
        },
        {
          url: "http://ark4rk.hatenablog.com/",
          iconName: "fas fa-rss"
        }
      ]
    };
  },
  components: {
    ArkIcon
  }
};
</script>
