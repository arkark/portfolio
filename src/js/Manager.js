import Vec2 from "@/js/math/Vec2.js";
import Node from "@/js/Node.js";
import CursorNode from "@/js/CursorNode.js";

const SHUFFLE_DURATION = 30;

export default class Manager2d {
  constructor(ctx) {
    this.intervalDelay = 10;
    this.numAtOnce = 1;
    this.ctx = ctx;
    this.nodes = [];
    const cursorNode = new CursorNode(this.ctx, this._getRandomPosition());
    this.nodes.push(cursorNode);
    this.restToShuffle = SHUFFLE_DURATION;
  }

  run(preCount) {
    const draw = () => {
      this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.clientWidth,
        this.ctx.canvas.clientHeight
      );

      this.nodes.forEach((node) => node.drawNode());
      this.nodes.forEach((node) => node.drawEdge());
    };
    setInterval(draw, 50);

    const move = () => {
      this.nodes.forEach((node) => node.move());
    };
    setInterval(move, 50);

    let i = 0;
    const constructDelaunay = () => {
      if (this.nodes.length == 0) return;
      for (let j = 0; j < this.numAtOnce; j++) {
        this.nodes[i].constructDelaunay();
        i = (i + 1) % this.nodes.length;
      }
    };
    for (let i = 0; i < preCount; i++) {
      constructDelaunay();
    }
    setInterval(constructDelaunay, this.intervalDelay);

    const tickShuffle = () => {
      this.restToShuffle--;
      if (this.restToShuffle <= 0) {
        this.shuffle();
      }
    };
    setInterval(tickShuffle, 1000);
    this.shuffle();

    window.addEventListener("click", (event) => {
      const rect = this.ctx.canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (
        x < rect.left ||
        x >= rect.width ||
        y < rect.top ||
        y >= rect.height
      ) {
        return;
      }
      if (event.target.tagName === "DIV" || event.target.tagName === "P") {
        this.shuffle();
      }
    });
  }

  addNode() {
    const node = new Node(this.ctx);
    node.pos = this._getRandomPosition();
    this.nodes.push(node);

    if (this.nodes.length >= 2) {
      const node1 = this.nodes[this.nodes.length - 2];
      const node2 = this.nodes[this.nodes.length - 1];
      node1.receive(node2);
      node2.receive(node1);
    }
  }

  clear() {
    this.nodes.length = 0;
  }

  shuffle() {
    this.nodes.forEach((node) => {
      node.targetPos = this._getRandomPosition();
    });
    this.restToShuffle = SHUFFLE_DURATION;
  }

  _getRandomPosition() {
    const width = this.ctx.canvas.clientWidth;
    const height = this.ctx.canvas.clientHeight;
    const p = 4.0; // L^p space

    while (true) {
      let x = Math.random() * 2.0 - 1.0;
      let y = Math.random() * 2.0 - 1.0;
      if (
        Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p) >
        Math.pow(0.95, p)
      ) {
        continue;
      }
      x = ((x + 1.0) / 2.0) * width;
      y = ((y + 1.0) / 2.0) * height;
      x = Math.round(x * 100) / 100;
      y = Math.round(y * 100) / 100;
      return new Vec2(x, y);
    }
  }
}
