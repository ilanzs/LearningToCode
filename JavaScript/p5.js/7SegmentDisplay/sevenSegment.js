class SevenSegment {
  constructor(x, num = 0) {
    this.x = x;
    this.num = num;
  }

  sevenSegment(val) {
    noStroke();
    noFill();
    // A
    fill(this.getColor(val, 6));
    rect(this.x, 20, 78, 18, 10);
    // B
    fill(this.getColor(val, 5));
    rect(this.x + 80, 40, 18, 98, 10);
    //C
    fill(this.getColor(val, 4));
    rect(this.x + 80, 160, 18, 98, 10);
    //D
    fill(this.getColor(val, 3));
    rect(this.x, 260, 78, 18, 10);
    //E
    fill(this.getColor(val, 2));
    rect(this.x - 20, 160, 18, 98, 10);
    //F
    fill(this.getColor(val, 1));
    rect(this.x - 20, 40, 18, 98, 10);
    //G
    fill(this.getColor(val, 0));
    rect(this.x, 140, 78, 18, 10);
  }

  getColor(val, shift) {
    let r = 255 * ((val >> shift) & 1);
    let g = 0;
    let b = 0;
    return color(r, g, b);
  }
}
