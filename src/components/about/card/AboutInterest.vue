<template>
  <about-card :title="'興味分野'">
    <p v-for="(item, index) in items" :key="index" class="mb-0">
      <span class="font-weight-bold mr-1">{{ item.key }}:</span>
      {{ item.value }}
    </p>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";

export default {
  data: function () {
    return {
      items: [
        {
          key: "Algorithm",
          value: "アルゴリズム、データ構造、組合せ最適化",
        },
        {
          key: "Mathematics",
          value: "代数、圏論、グラフ理論",
        },
        {
          key: "Distributed",
          value: "分散システム、ネットワーク",
        },
        {
          key: "Design",
          value: "シェーダ、ジェネラティブデザイン",
        },
      ],
    };
  },
  components: {
    AboutCard,
  },
};
</script>
