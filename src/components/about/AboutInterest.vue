<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon size="16px" dark>fas fa-cogs</v-icon>
    </template>
    <v-card>
      <v-card-title>興味分野</v-card-title>
      <v-card-text class="subtitle-1 text--primary">
        <p v-for="(item, index) in items" :key="index" class="mb-0">
          <v-icon small class="mr-1">fas fa-angle-double-left</v-icon>
          <span
            :style="{
              width: '3.5em',
              'text-align': 'center',
              display: $vuetify.breakpoint.xsOnly ? 'inline' : 'inline-block'
            }"
          >
            <span class="font-weight-bold">{{ item.key }}</span>
          </span>
          <v-icon small class="ml-1 mr-2">fas fa-angle-double-right</v-icon>
          <span>{{ item.value }}</span>
        </p>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  data: function() {
    return {
      items: [
        {
          key: "algo",
          value: "アルゴリズム、データ構造、組合せ最適化"
        },
        {
          key: "math",
          value: "代数、圏論、グラフ理論"
        },
        {
          key: "dist",
          value: "分散システム、ネットワーク"
        },
        {
          key: "logic",
          value: "論理学"
        },
        {
          key: "design",
          value: "シェーダ、ジェネラティブデザイン"
        }
      ]
    };
  }
};
</script>
