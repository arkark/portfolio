<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon small dark>fas fa-briefcase</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">インターン等</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <template v-for="(item, index) in items">
          <p class="mb-0" :key="index">
            <span>{{ item.label }}</span>
          </p>
          <p
            v-for="(subItem, subIndex) in item.children"
            :key="index + '-' + subIndex"
            class="ml-1 mb-0 body-2"
          >
            <itemize-icon></itemize-icon>
            <span>{{ subItem.label }}</span>
            <span v-if="'url' in subItem">
              <v-btn
                :href="subItem.url"
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
        </template>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import ItemizeIcon from "@/components/about/ItemizeIcon";
import internList from "@/data/intern";

export default {
  data: function() {
    return {
      items: internList
    };
  },
  components: { ItemizeIcon }
};
</script>
