<template>
  <canvas class="background" v-resize="onResize"></canvas>
</template>

<style scoped>
.background {
  position: absolute;
  left: 0;
  top: 0;
  background: #030e29;
}
</style>

<script>
import Manager from "@/js/Manager.js";

export default {
  data: function () {
    return {
      ctx: null,
      shouldMove: true,
      moveSpeed: 0.6,
      intervalDelay: 100,
    };
  },
  mounted() {
    this.ctx = this.$el.getContext("2d");
    this.resizeCanvas();

    let first = true;
    const run = () => {
      if (!first) return;
      first = true;

      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const area = width * height;
      const nodeNum = Math.max(30, Math.ceil(area / 12000));
      const numAtOnce = Math.ceil(2 * Math.sqrt(nodeNum));
      const preCount = Math.ceil((Math.sqrt(nodeNum) * nodeNum) / numAtOnce);

      const manager = new Manager(this.ctx);
      for (let i = 0; i < nodeNum; i++) {
        manager.addNode();
      }
      manager.nodes.forEach((node) => (node.shouldMove = this.shouldMove));
      manager.nodes.forEach(
        (node) => (node.moveSpeed = this.moveSpeed * (1.0 + Math.random()))
      );
      manager.intervalDelay = this.intervalDelay;
      manager.numAtOnce = numAtOnce;

      manager.run(preCount);
    };

    if (document.readyState === "complete") {
      run();
    } else {
      document.addEventListener("readystatechange", (event) => {
        if (event.target.readyState === "complete") {
          run();
        }
      });
    }
  },
  methods: {
    onResize() {
      if (this.ctx === null) return;
      this.resizeCanvas();
    },
    resizeCanvas() {
      const width = document.documentElement.clientWidth;
      const height = document.documentElement.clientHeight;
      const ratio = window.devicePixelRatio;
      this.ctx.canvas.style.width = width + "px";
      this.ctx.canvas.style.height = height + "px";
      this.ctx.canvas.width = width * ratio;
      this.ctx.canvas.height = height * ratio;
      this.ctx.scale(ratio, ratio);
    },
  },
};
</script>
