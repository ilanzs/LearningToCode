class Bubble {
  constructor(x, y, r, g, b, a) {
    this.x = x;
    this.y = y;
    this.radius = random(50, 100);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  move() {
    this.x += random(-1, 1);
    this.y += random(-1, 1);
  }

  show() {
    fill(this.r, this.g, this.b, this.a);
    noStroke();
    circle(this.x, this.y, this.radius);
  }
}
