<template>
  <canvas id="background" ref="background" v-resize="onResize"></canvas>
</template>

<script>
import Manager from "@/js/Manager.js";

export default {
  data: function() {
    return {
      ctx: null,
      shouldMove: true,
      moveSpeed: 0.6,
      intervalDelay: 100,
      numAtOnce: 40,
      nodeNum: 200
    };
  },
  mounted() {
    this.ctx = this.$refs["background"].getContext("2d");
    this.resizeCanvas();

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

    manager.run(1000);
  },
  methods: {
    onResize() {
      if (this.ctx === null) return;
      this.resizeCanvas();
    },
    resizeCanvas() {
      this.ctx.canvas.width = window.innerWidth;
      this.ctx.canvas.height = window.innerHeight;
    }
  }
};
</script>

<style>
#background {
  position: fixed;
  left: 0;
  top: 0;
  /* z-index: -1; */
  background: #202530;
}
</style>
