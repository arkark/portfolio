<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-shield-alt</v-icon>
    </template>
    <v-card>
      <v-card-title>CTF</v-card-title>
      <v-card-text class="subtitle-1 text--primary">
        <p v-for="(item, index) in items" :key="index" class="mb-0 body-2">
          <itemize-icon></itemize-icon>
          <span>{{ item.label }}</span>
          <span v-if="'url' in item">
            <v-btn
              :href="item.url"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              icon
              text
              small
            >
              <v-icon size="12px">fas fa-external-link-alt</v-icon>
            </v-btn>
          </span>
        </p>
        <p class="mb-0">
          過去の
          <a href="https://ark4rk.hatenablog.com/archive/category/CTF">
            writeup
          </a>
        </p>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import ItemizeIcon from "@/components/about/ItemizeIcon";
import ctfList from "@/data/ctf";

export default {
  data: function() {
    return {
      items: ctfList
    };
  },
  components: { ItemizeIcon }
};
</script>
