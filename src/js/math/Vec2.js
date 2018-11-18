export default class Vec2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add(that) {
    return new Vec2(this.x + that.x, this.y + that.y);
  }
  sub(that) {
    return new Vec2(this.x - that.x, this.y - that.y);
  }
  mul(that) {
    return new Vec2(this.x * that.x, this.y * that.y);
  }
  div(that) {
    return new Vec2(this.x / that.x, this.y / that.y);
  }

  scale(val) {
    return new Vec2(this.x * val, this.y * val);
  }

  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.lengthSq());
  }

  distanceSq(that) {
    return this.sub(that).lengthSq();
  }
  distance(that) {
    return this.sub(that).length();
  }

  normalize() {
    const len = this.length();
    return this.scale(1 / len);
  }

  dot(that) {
    return this.x * that.x + this.y * that.y;
  }
  cross(that) {
    return this.x * that.y - this.y * that.x;
  }

  static dot(v1, v2) {
    return v1.dot(v2);
  }
  static cross(v1, v2) {
    return v1.cross(v2);
  }

  // CounterClockWise
  static ccw(v1, v2, v3) {
    return v2.sub(v1).cross(v3.sub(v2));
  }

  // 多角形vsが凸か？
  static isConvex(...vs) {
    if (vs.length < 3) return true;

    const c0 = Vec2.ccw(vs[0], vs[1], vs[2]);
    for (let i = 1; i < vs.length; i++) {
      const v1 = vs[(i + 0) % vs.length];
      const v2 = vs[(i + 1) % vs.length];
      const v3 = vs[(i + 2) % vs.length];
      const c1 = Vec2.ccw(v1, v2, v3);
      if (c0 * c1 <= 0) return false;
    }
    return true;
  }
}
