import Vec2 from "@/js/math/Vec2.js";
import Node from "@/js/Node.js";

export default class CursorNode extends Node {
  constructor(ctx, pos = new Vec2(0, 0)) {
    super(ctx, pos);
    window.addEventListener("mousemove", (event) => {
      this.targetPos = this._mousePosition(event);
    });
  }

  get radius() {
    return 5;
  }

  _mousePosition(event) {
    const rect = this.ctx.canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return new Vec2(x, y);
  }
}
