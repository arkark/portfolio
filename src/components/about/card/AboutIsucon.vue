<template>
  <about-card :title="'ISUCON'">
    <p class="mb-1">Team: shallowverse</p>
    <ul class="fa-ul body-2 ma-0">
      <li class="mb-1">
        <span class="fa-li"><i class="fas fa-hashtag"></i></span>
        <span>ISUCON 10</span>
        <link-icon url="http://isucon.net/archives/54704557.html"></link-icon>
        <ul class="fa-ul body-2 ma-0">
          <li class="mb-1">
            <span class="fa-li"><i class="fas fa-chevron-right"></i></span>
            <span>予選 : 2位 </span>
            <v-icon size="12px" color="black">fas fa-arrow-right</v-icon>
            <span> 本戦 : 9位</span>
          </li>
        </ul>
      </li>
    </ul>
  </about-card>
</template>

<script>
import AboutCard from "@/components/about/card/AboutCard";
import LinkIcon from "@/components/about/icon/LinkIcon";

export default {
  components: {
    AboutCard,
    LinkIcon,
  },
};
</script>
