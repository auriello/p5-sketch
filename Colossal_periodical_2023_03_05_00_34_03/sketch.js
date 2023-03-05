function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("teal");
  
  fill("purple");
  noStroke();
  rect(100,0,40,100);
  
  fill("gold");
  stroke("yellow")
  strokeWeight(4);
  ellipse(200,200,100,100);
  triangle(200,200,100,115, 250, 100);
  
    fill("pink");
  stroke("rgb(24,240,240)")
  strokeWeight(4);
  ellipse(200,100,50,75);
  
  fill("gold");
  
  ellipse(100,200,75,50);
  
    fill("gold");
  
  ellipse(200,300,50,75);
  
    fill("gold");
  
  ellipse(300,200,75,50);
  
 fill("gray");
  noStroke();
  rect(200,300,160,80);
  
  
  
}