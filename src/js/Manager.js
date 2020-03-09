import Vec2 from "@/js/math/Vec2.js";
import Node from "@/js/Node.js";
import CursorNode from "@/js/CursorNode.js";

export default class Manager2d {
  constructor(ctx) {
    this.intervalDelay = 10;
    this.numAtOnce = 1;
    this.ctx = ctx;
    this.nodes = [];
    const cursorNode = new CursorNode(this.ctx, this._getRandomPosition());
    this.nodes.push(cursorNode);
  }

  run(preCount) {
    const draw = () => {
      this.ctx.clearRect(
        0,
        0,
        this.ctx.canvas.clientWidth,
        this.ctx.canvas.clientHeight
      );

      this.nodes.forEach(node => node.drawNode());
      this.nodes.forEach(node => node.drawEdge());
    };
    setInterval(draw, 50);

    const move = () => {
      this.nodes.forEach(node => node.move());
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

    window.addEventListener("click", event => {
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
    this.nodes.forEach(node => {
      node.targetPos = this._getRandomPosition();
    });
  }

  _getRandomPosition() {
    const padding = 10;
    const width = this.ctx.canvas.clientWidth;
    const height = this.ctx.canvas.clientHeight;

    let x = Math.random() * (width - 2 * padding) + padding;
    let y = Math.random() * (height - 2 * padding) + padding;
    x = Math.round(x * 100) / 100;
    y = Math.round(y * 100) / 100;
    return new Vec2(x, y);
  }
}
