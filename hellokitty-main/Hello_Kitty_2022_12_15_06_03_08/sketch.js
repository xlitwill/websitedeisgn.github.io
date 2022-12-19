function setup() {
  createCanvas(400, 400);
  noStroke();
  
}

function draw() {
  console.log(mouseX + ", " + mouseY);
  background(255,204,204);
  let c = color(204,0,0);
  let d = color(0)
  let y = color(255,188,38,255)
  //head
  ellipse(200,200,200,150);

  //right ear
  beginShape();
  curveVertex(280,110);
  curveVertex(230,140);
  curveVertex(295,190);
  curveVertex(280,110);
  curveVertex(230,140);
  curveVertex(295,190);
  endShape();
  push();
  //left bow
  fill(c);
  beginShape();
  curveVertex(230,110);
  curveVertex(255,150);
  curveVertex(210,150);
  curveVertex(230,110);
  curveVertex(255,150);
  curveVertex(210,150);
  endShape();
  //right bow
  fill(c);
  beginShape();
  curveVertex(265,150);
  curveVertex(310,140);
  curveVertex(298,180);
  curveVertex(265,150);
  curveVertex(310,140);
  curveVertex(298,180);
  endShape();
  // //center bow
  circle(262,148,40)
  pop();
  
  //eyes
  push();
  fill(d);
  ellipse(155,205,15,20)
  ellipse(245,205,15,20)
  
  pop();
  
  // //whiskers
  push();
  stroke(1)
  strokeWeight(4)
  line(88,190,117, 196)
  line(85,207,117, 207)
  line(88,221,117, 218)
  line(312,190,283, 196)
  line(315,207,283, 207)
  line(312,221,283, 218)
  pop();
  
  push();
  //mouth
  push();
  fill(y);
  ellipse(200,230,15,10)
  pop();
  
  push();
  //left ear
  beginShape();
  curveVertex(120,110);
  curveVertex(170,140);
  curveVertex(105,190);
  curveVertex(120,110);
  curveVertex(170,140);
  curveVertex(105,190);
  endShape();
  pop();
 
}
