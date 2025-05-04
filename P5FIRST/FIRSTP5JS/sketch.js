let x = 0;
function setup() {
  createCanvas(800, 400);
  x = width / 2;
}

function draw() {
  background(0);
  ellipse(x, 200, 50, 50);
  x += 5;
  if (x > width + 125) {
    x = -125;
  }
  fill(random(255), random(255), random(255));
  stroke(random(255), random(255), random(255));
  
}
