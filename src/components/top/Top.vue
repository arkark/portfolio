<template>
  <v-card
    :width="screenWidth"
    :height="screenHeight"
    color="#fff0"
    flat
    v-resize="onResize"
  >
    <v-container fill-height style="cursor: crosshair;">
      <v-col>
        <v-row align="center" justify="center" class="text-center">
          <v-card :width="480" color="rgba(0, 0, 0, 0)" flat dark>
            <p class="display-1 font-weight-medium mb-1">
              Ark's page
            </p>
            <p class="body-2 mb-2">
              I <v-icon small>fas fa-heart</v-icon> creating something!
            </p>
            <v-divider
              class="py-0 mx-2"
              style="border-color: rgba(255, 255, 255, 0.6);"
            ></v-divider>
            <ark-icon class="my-2"></ark-icon>
            <p class="subtitle-2 mb-1">
              Mathematics / Computer Science / Programming
            </p>
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
          </v-card>
        </v-row>
      </v-col>
    </v-container>
    <top-footer></top-footer>
  </v-card>
</template>

<script>
import ArkIcon from "@/components/top/ArkIcon.vue";
import TopFooter from "@/components/top/TopFooter.vue";

export default {
  data: function () {
    return {
      accountList: [
        {
          url: "https://github.com/arkark",
          iconName: "fab fa-github",
        },
        {
          url: "https://twitter.com/arkark_",
          iconName: "fab fa-twitter",
        },
        {
          url: "https://ark4rk.hatenablog.com",
          iconName: "fas fa-pen-nib",
        },
      ],
      screenWidth: document.documentElement.clientWidth,
      screenHeight: document.documentElement.clientHeight,
    };
  },
  methods: {
    onResize: function () {
      this.screenWidth = document.documentElement.clientWidth;
      this.screenHeight = document.documentElement.clientHeight;
    },
  },
  components: {
    ArkIcon,
    TopFooter,
  },
};
</script>
