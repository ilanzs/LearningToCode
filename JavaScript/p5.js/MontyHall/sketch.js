let numOfWins = 0;
let numOfLoses = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  let winningDoor = floor(random(3));
  let pickedDoor = floor(random(3));

  if (winningDoor == pickedDoor) {
    numOfLoses++;
  } else {
    numOfWins++;
  }

  console.log(((numOfWins / frameCount) * 100) + "%");

  fill(0, 0, 255);
  noStroke();
  circle(200, 200, numOfWins / 3);

  fill(255, 0, 0);
  noStroke();
  circle(400, 200, numOfLoses / 3);
}