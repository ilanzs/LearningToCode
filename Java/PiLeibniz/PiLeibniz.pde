double pi = 0d;
float iterations = 0;
ArrayList<Double> history = new ArrayList<Double>();

void setup() {
  size(800, 800); 
  background(0);
}

void draw() {
  background(0);
  if (iterations % 2 == 0) {
    pi += 1 / (iterations * 2 + 1);
  } else {
    pi -= 1 / (iterations * 2 + 1);
  }

  iterations++;
  history.add(pi*4);

  textSize(32);
  fill(255);
  textAlign(TOP);
  String output = "" + pi * 4;
  text(output, 0, 32);
}
