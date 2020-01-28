<template>
  <v-card
    :width="screenWidth"
    :height="screenHeight"
    color="#fff0"
    flat
    v-resize="onResize"
  >
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-card width="480" color="rgba(0, 0, 0, 0)" flat dark>
          <v-container class="pa-6" align-center justify-center>
            <p class="text-center display-1 font-weight-medium mb-1">
              Ark's page
            </p>
            <p class="text-center mb-2">
              I <v-icon small>fas fa-heart</v-icon> creating something!
            </p>
            <v-divider
              class="pt-0 pb-4 mx-2"
              style="border-color: rgba(255, 255, 255, 0.6);"
            ></v-divider>
            <v-layout class="ma-1 pa-0">
              <ark-icon></ark-icon>
            </v-layout>
            <p class="text-center font-weight-medium mb-1">
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
  </v-card>
</template>

<script>
import ArkIcon from "@/components/top/ArkIcon.vue";

export default {
  data: function() {
    return {
      accountList: [
        {
          url: "https://github.com/arkark",
          iconName: "fab fa-github"
        },
        {
          url: "https://twitter.com/arkark_",
          iconName: "fab fa-twitter"
        },
        {
          url: "https://ark4rk.hatenablog.com/archive",
          iconName: "fas fa-rss"
        }
      ],
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight
    };
  },
  methods: {
    onResize: function() {
      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
    }
  },
  components: {
    ArkIcon
  }
};
</script>
