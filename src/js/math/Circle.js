export default class Circle {
  constructor(center, radius) {
    this.center = center;
    this.radius = radius;
  }

  inPoint(pos) {
    return this.center.distanceSq(pos) < this.radius * this.radius;
  }
}
