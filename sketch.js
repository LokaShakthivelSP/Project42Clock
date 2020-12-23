var hr,min,sec;
var hrAng,minAng,secAng;

function setup() {
  createCanvas(600,600);
  angleMode(DEGREES);
}

function draw() {
  background(128, 128, 128);
  hr=hour();
  min=minute();
  sec=second();

  hrAng=map(hr%12,0,12,0,360);
  minAng=map(min,0,60,0,360);
  secAng=map(sec,0,60,0,360);

  console.log(hr+" : "+min+" : "+sec);

  translate(300,300);
  rotate(-90);

  push();
  rotate(hrAng);
  stroke(250, 150, 27);
  strokeWeight(6);
  line(0,0,120,0);
  pop();

  push();
  rotate(minAng);
  stroke(255);
  strokeWeight(3);
  line(0,0,200,0);
  pop();

  push();
  rotate(secAng);
  stroke(27, 250, 34);
  strokeWeight(2);
  line(0,0,220,0);
  pop();

  strokeWeight(8);
  noFill();

  stroke(250, 150, 27);
  arc(0,0,580,580,0,hrAng);

  stroke(255);
  arc(0,0,560,560,0,minAng);

  stroke(27, 250, 34);
  arc(0,0,540,540,0,secAng);

  drawSprites();
}
