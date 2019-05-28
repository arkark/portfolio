<template>
  <canvas id="background" ref="background" v-resize="onResize"></canvas>
</template>

<script>
import isMobile from "ismobilejs";
import Manager from "@/js/Manager.js";

export default {
  data: function() {
    return {
      ctx: null,
      shouldMove: true,
      moveSpeed: 0.6,
      intervalDelay: 100,
      numAtOnce: this.isPhone() ? 20 : 40,
      nodeNum: this.isPhone() ? 100 : 200
    };
  },
  mounted() {
    this.ctx = this.$el.getContext("2d");
    this.resizeCanvas();

    setTimeout(() => {
      const manager = new Manager(this.ctx);
      for (let i = 0; i < this.nodeNum; i++) {
        manager.addNode();
      }
      manager.nodes.forEach(node => (node.shouldMove = this.shouldMove));
      manager.nodes.forEach(
        node => (node.moveSpeed = this.moveSpeed * (1.0 + Math.random()))
      );
      manager.intervalDelay = this.intervalDelay;
      manager.numAtOnce = this.numAtOnce;

      manager.run(200);
    }, 100);
  },
  methods: {
    onResize() {
      if (this.ctx === null) return;
      this.resizeCanvas();
    },
    resizeCanvas() {
      const width = document.body.clientWidth;
      const height = document.body.clientHeight;
      const ratio = window.devicePixelRatio;
      this.ctx.canvas.style.width = width + "px";
      this.ctx.canvas.style.height = height + "px";
      this.ctx.canvas.width = width * ratio;
      this.ctx.canvas.height = height * ratio;
      this.ctx.scale(ratio, ratio);
    },
    isPhone() {
      return isMobile.phone;
    }
  }
};
</script>

<style>
#background {
  position: fixed;
  left: 0;
  top: 0;
  background: #202530;
}
</style>
