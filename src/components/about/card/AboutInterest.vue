<template>
  <about-card :title="'興味分野'">
    <ul class="fa-ul body-2 ma-0">
      <li v-for="(item, index) in items" :key="index" class="mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";

export default {
  data: function () {
    return {
      items: [
        "Algorithms and Data Structures",
        "Distributed Systems",
        "Cyber Security",
        "Generative Design",
      ],
    };
  },
  components: {
    AboutCard,
  },
};
</script>
