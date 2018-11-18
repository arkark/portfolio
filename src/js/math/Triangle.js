import Vec2 from "./Vec2";
import Circle from "./Circle.js";

export default class Triangle {
  constructor(v1, v2, v3) {
    this.v1 = v1;
    this.v2 = v2;
    this.v3 = v3;
  }

  // get a circumcircle of this
  getCircumCircle() {
    const v1 = this.v1;
    const v2 = this.v2;
    const v3 = this.v3;

    const d = 2 * Vec2.cross(v2.sub(v1), v3.sub(v1));
    if (d == 0) {
      // when three points are on the same line
      return null;
    }
    const x =
      ((v3.y - v1.y) * (v2.lengthSq() - v1.lengthSq()) +
        (v1.y - v2.y) * (v3.lengthSq() - v1.lengthSq())) /
      d;
    const y =
      ((v1.x - v3.x) * (v2.lengthSq() - v1.lengthSq()) +
        (v2.x - v1.x) * (v3.lengthSq() - v1.lengthSq())) /
      d;
    const c = new Vec2(x, y);
    const r = v1.distance(c);
    return new Circle(c, r);
  }
}
