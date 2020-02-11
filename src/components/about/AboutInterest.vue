<template>
  <v-timeline-item :color="'#555'" fill-dot>
    <template v-slot:icon>
      <v-icon size="16px" dark>fas fa-cogs</v-icon>
    </template>
    <v-card class="elevation-4">
      <v-card-title class="pb-0">興味分野</v-card-title>
      <v-divider
        class="py-0 mx-3"
        style="border-width: 1px; border-color: #555;"
      ></v-divider>
      <v-card-text class="pt-3 subtitle-1 text--primary">
        <p v-for="(item, index) in items" :key="index" class="mb-0">
          <span class="font-weight-bold mr-1">{{ item.key }}:</span>
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
          key: "Algorithm",
          value: "アルゴリズム、データ構造、組合せ最適化"
        },
        {
          key: "Mathematics",
          value: "代数、圏論、グラフ理論"
        },
        {
          key: "Distributed",
          value: "分散システム、ネットワーク"
        },
        {
          key: "Logic",
          value: "論理学"
        },
        {
          key: "Design",
          value: "シェーダ、ジェネラティブデザイン"
        }
      ]
    };
  }
};
</script>
