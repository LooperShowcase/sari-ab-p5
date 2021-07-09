function setup() {
  // The size of our starting canvas: 400px width, 400px height
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  let seconds = second();
  let minutes = minute();
  let hours = hour();
  // The same as doing: background(220); or --> background(220,220,220);
  background("gray");
  if (seconds == 15) {
    background(52, 58, 64);
  }
  if (seconds == 30) {
    background(52, 58, 64);
  }
  if (seconds == 45) {
    background(52, 58, 64);
  }
  if (seconds == 0) {
    background(52, 58, 64);
  }
  //text(hours + ":" + minutes + ":" + seconds, width / 2, height / 2);
  noFill();
  strokeWeight(8);

  translate(width / 2, height / 2);
  rotate(-90);

  let secArc = map(seconds, 0, 60, 0, 360);

  let minArc = map(minutes, 0, 60, 0, 360);

  let hourArc = map(hours % 12, 0, 12, 0, 360);

  push();
  rotate(secArc);
  stroke("red");
  line(0, 0, 150, 0);
  pop();

  push();
  rotate(minArc);
  stroke("red");
  line(0, 0, 130, 0);
  pop();

  push();
  rotate(hourArc);
  stroke("red");
  line(0, 0, 110, 0);
  pop();

  strokeWeight(1);
  textSize(20);
  rotate(90);

  push();
  stroke("white");
  fill("white");
  text("3", 180, 0);

  stroke("white");
  text("9", -190, 0);

  stroke("white");
  text("6", 0, 190);

  stroke("white");
  text("12", 0, -180);
  pop();

  push();
  stroke("gold");
  fill("gold");
  textSize(13);
  strokeWeight(1);
  text("sari`s", -15, 70);
  pop();
  pop();
  push();
  stroke("black");
  fill("black");
  ellipse(0, 0, 30, 30, 0, 360);
  pop();
  strokeWeight(10);
  stroke("gold");
  point(0, 0);
  ellipse(0, 0, 340, 340, 0, 360);
}
