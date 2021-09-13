let totalBubbles = 100;
let bubbles = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for (let i = 0; i < totalBubbles; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(100, 255);
    let g = random(100, 255);
    let b = random(100, 255);
    let a = 100;
    bubbles.push(new Bubble(x, y, r, g, b, a));
  }
}

function draw() {
  background(0);

  for (i of bubbles) {
    i.move();
    i.show();
  }
}