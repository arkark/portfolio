import Vec2 from "@/js/math/Vec2.js";
import Triangle from "@/js/math/Triangle.js";
import Const from "@/js/util/Const.js";

let id = 0;

export default class Node {
  constructor(ctx, pos = new Vec2(0, 0)) {
    this.id = id++;

    this.ctx = ctx;
    this.pos = pos;

    this._shouldMove = false;
    this.moveDir = new Vec2(0, 0);
    this.moveSpeed = 2.0;

    this.adjNodes = [];
  }

  get x() {
    return this.pos.x;
  }
  get y() {
    return this.pos.y;
  }
  set x(val) {
    this.pos.x = val;
  }
  set y(val) {
    this.pos.y = val;
  }
  get radius() {
    return 3;
  }

  get shouldMove() {
    return this._shouldMove;
  }
  set shouldMove(val) {
    this._shouldMove = val;
    const arg = 2 * Math.PI * Math.random();
    this.moveDir = new Vec2(Math.cos(arg), Math.sin(arg));
  }

  receive(node) {
    if (node.id == this.id) return;
    for (let n of this.adjNodes) {
      if (node.id == n.id) return;
    }
    this.adjNodes.push(node);
  }

  constructDelaunay() {
    const nodes = [].concat(this.adjNodes);
    this.adjNodes.length = 0;
    const nonAdjNodes = [];

    this._sortAsClockWise(nodes);
    this._triangulate(nodes, this.adjNodes, nonAdjNodes);
    this._delegate(this.adjNodes, nonAdjNodes);
    this._notifyTriangulation(this.adjNodes);
  }

  move() {
    if (!this.shouldMove) return;
    let x = this.x + this.moveDir.x * this.moveSpeed;
    let y = this.y + this.moveDir.y * this.moveSpeed;
    let w = this.ctx.canvas.clientWidth;
    let h = this.ctx.canvas.clientHeight;
    if (x < 0 || x > w) {
      this.moveDir.x *= -1;
      x = Math.max(0, Math.min(w, x));
    }
    if (y < 0 || y > h) {
      this.moveDir.y *= -1;
      y = Math.max(0, Math.min(h, y));
    }
    this.x = x;
    this.y = y;
  }

  get nodeColor() {
    return "rgba(130, 240, 250, 0.3)";
  }

  get edgeColor() {
    return "rgba(100, 210, 250, 0.2)";
  }

  drawNode() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    this.ctx.fillStyle = this.nodeColor;
    this.ctx.fill();
    this.ctx.closePath();
  }

  drawEdge() {
    this.adjNodes.forEach(node => {
      const v1 = this.pos;
      const v2 = node.pos;
      this.ctx.beginPath();
      this.ctx.moveTo(v1.x, v1.y);
      this.ctx.lineTo(v2.x, v2.y);
      this.ctx.lineWidth = 1.5;
      this.ctx.strokeStyle = this.edgeColor;
      this.ctx.stroke();
    });
  }

  // 偏角ソート
  _sortAsClockWise(nodes) {
    nodes.forEach(n => (n.__arg = Math.atan2(n.y - this.y, n.x - this.x)));
    nodes.sort((a, b) => a.__arg - b.__arg);
  }

  // 局所ドロネー化
  _triangulate(nodes, adjNodes, nonAdjNodes) {
    // 点v0, v1, v2が同一直線状にあるか?
    const onLine = (v0, v1, v2) => {
      return Math.abs(v1.sub(v0).cross(v2.sub(v0))) < Const.EPS;
    };

    // 点(v0, v1, v2, v4)が同一円周上にあるか?
    const onCircle = (v0, v1, v2, v3) => {
      const circle = new Triangle(v0, v1, v2).getCircumCircle();
      const rSq = circle.center.distanceSq(v0);
      const dSq = circle.center.distanceSq(v3);
      return Math.abs(dSq - rSq) < Const.EPS;
    };

    // v3 が三角形(v0, v1, v2)の内部にあるか?
    const inCircle = (v0, v1, v2, v3) => {
      const circle = new Triangle(v0, v1, v2).getCircumCircle();
      const rSq = circle.center.distanceSq(v0);
      const dSq = circle.center.distanceSq(v3);
      return dSq < rSq;
    };

    const remove = i => {
      nonAdjNodes.push(nodes[i]);
      nodes.splice(i, 1);
    };

    for (let i = 0; i < nodes.length; i++) {
      if (nodes.length < 3) break;
      const i1 = (((i + 0) % nodes.length) + nodes.length) % nodes.length;
      const i2 = (((i + 1) % nodes.length) + nodes.length) % nodes.length;
      const i3 = (((i + 2) % nodes.length) + nodes.length) % nodes.length;
      const n1 = nodes[i1];
      const n2 = nodes[i2];
      const n3 = nodes[i3];

      if (onLine(this.pos, n1.pos, n2.pos)) {
        const d1 = n1.pos.distanceSq(this.pos);
        const d2 = n2.pos.distanceSq(this.pos);
        remove(d1 > d2 ? i1 : i2);
        i -= 2;
      } else if (onLine(this.pos, n2.pos, n3.pos)) {
        const d1 = n2.pos.distanceSq(this.pos);
        const d2 = n3.pos.distanceSq(this.pos);
        remove(d1 > d2 ? i2 : i3);
        i -= 2;
      } else if (onCircle(this.pos, n1.pos, n2.pos, n3.pos)) {
        let maxId = -1;
        maxId = Math.max(maxId, this.id);
        maxId = Math.max(maxId, n1.id);
        maxId = Math.max(maxId, n2.id);
        maxId = Math.max(maxId, n3.id);
        if (this.id == maxId || n2.id == maxId) {
          remove(i2);
          i -= 2;
        }
      } else if (
        inCircle(this.pos, n1.pos, n2.pos, n3.pos) &&
        Vec2.isConvex(this.pos, n1.pos, n2.pos, n3.pos)
      ) {
        remove(i2);
        i -= 2;
      } else {
        //
      }
    }
    nodes.forEach(n => adjNodes.push(n));
    nodes.length = 0;
  }

  // 移譲
  _delegate(adjNodes, nonAdjNodes) {
    nonAdjNodes.forEach(n1 => {
      let minD = Infinity;
      let minN = null;
      adjNodes.forEach(n2 => {
        let d = n2.pos.distanceSq(n1.pos);
        if (d < minD) {
          minD = d;
          minN = n2;
        }
      });
      minN.receive(n1);
    });
  }

  // 三角化通知
  _notifyTriangulation(adjNodes) {
    for (let i = 0; i < adjNodes.length; i++) {
      const n1 = adjNodes[(i + 0) % adjNodes.length];
      const n2 = adjNodes[(i + 1) % adjNodes.length];
      if (Vec2.ccw(n2.pos, this.pos, n1.pos) <= 0) continue; // 必要じゃない？
      n1.receive(n2);
      n2.receive(n1);
    }
  }
}
