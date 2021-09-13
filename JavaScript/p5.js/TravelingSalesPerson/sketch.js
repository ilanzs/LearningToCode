let cities = [];
let totalCities = 10;
let best;

function setup() {
  createCanvas(400, 400);

  // create the random cities
  for (let i = 0; i < totalCities; i++) {
    let v = createVector(random(width), random(height));
    cities[i] = v;
  }
  best = [...cities];
}

function draw() {
  background(0);

  // draw the weight of the best permutation that we've found
  fill(255);
  noStroke();
  textSize(20);
  text(getWeight(best), 0, 20);

  // swap the cities
  cities = swap(
    cities,
    floor(random(cities.length)),
    floor(random(cities.length))
  );
  if (getWeight(cities) < getWeight(best)) {
    best = [...cities];
  }

  // draw the cities
  fill(255);
  for (let i = 0; i < totalCities; i++) {
    circle(best[i].x, best[i].y, 15);
  }

  // draw lines between the cities
  stroke(255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < totalCities; i++) {
    vertex(best[i].x, best[i].y);
  }
  endShape();
}

function swap(a, i, j) {
  // swap two indices of an array
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;

  return a;
}

function getWeight(a) {
  // calculate the distance between all the dots
  let weight = 0;
  for (let i = 0; i < a.length - 1; i++) {
    weight += dist(a[i].x, a[i].y, a[i + 1].x, a[i + 1].y);
  }

  return weight;
}
