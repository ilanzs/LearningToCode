int dartAmount = 10000000;

PVector[] darts = new PVector[dartAmount];
float inCircle = 0;

float pi;


void setup() {
  size(800, 800); 
  background(255);
  
  circle(width / 2, height / 2, width);
  

  for (int i = -1; i < darts.length - 1; i++) {
    darts[i + 1] = new PVector(random(width), random(height));
  }

  for (int i = -1; i < darts.length - 1; i++) {
    if (dist(width / 2, height / 2, darts[i+1].x, darts[i+1].y) < width / 2) {
      inCircle++;
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    
    noStroke();
    circle(darts[i+1].x, darts[i+1].y, 5);
  }
  
  pi = 4 * inCircle / darts.length;
  println(pi);
}
