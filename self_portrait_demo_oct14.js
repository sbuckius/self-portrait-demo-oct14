let img;

// Load the image.
function preload() {
  img = loadImage('images/punch_card.png');
}


function setup() {
  
  createCanvas(1000, 1000);
  background(255, 204, 0);
  angleMode(DEGREES);
  
  

   image(img, -90, 560, 1200, 500);
  
  
  //Top Rectangle for Background
  strokeWeight(4);
  stroke(51);
  fill('#986ea7');
  rect(0, 0, 1000, 106);
  
   //Second Rectangle for Background
  strokeWeight(4);
  stroke(51);
  fill('#3c87c7');
  rect(0, 108, 1000, 106);
  
  //Body
   strokeWeight(4);
  stroke(51);
  fill('#f82417');
  triangle(-196, 1069, 524, 625, 1164, 1030);
  
  //Shirt Line
  line(528, 686, 491, 1033);
  
  //Face
  strokeWeight(4);
  stroke(51);
  fill('#04cd75');
  ellipse(519, 430, 393, 542);
  
  
  //Left Eye
  arc(432, 397, 73, 40, 180, 0, OPEN);
  
  //Right Eye
  arc(577, 397, 73, 40, 180, 0, OPEN);
  
 
 
  //Hair 1
  strokeWeight(3);
  stroke(51);
  fill('#de628a');
  beginShape();

  // Add vertices.
  vertex(540, 110);
  vertex(508, 226);
  vertex(368, 253);
  vertex(330, 336);
  vertex(463, 743);
  vertex(212, 860);
  vertex(34, 673);
  vertex(147, 404);
  vertex(343, 79);

  // Stop drawing the shape.
  endShape(CLOSE);
  
  //Hair 2
  strokeWeight(3);
  stroke(51);
  fill('#7ad3ec');
  beginShape();

   // Add the first control point.
   curveVertex(542, 115);
   curveVertex(542, 115);

  // Add the anchor points to draw between.
  curveVertex(645, 127);
  curveVertex(769, 310);
 curveVertex(867, 484);
  curveVertex(957, 623); 
    curveVertex(737, 732);
    curveVertex(620, 678);    
  curveVertex(716, 420); 

  // Add the second control point.
  curveVertex(510, 228);
  curveVertex(510, 228);

endShape();

//Nose
  strokeWeight(3);
  stroke(51);
  fill('#d0d250');
quad(510, 433, 539, 510, 503, 540, 484, 514);

 fill('#d0d250');
textSize(100);
text('123456789', 100, 100);
}


function draw() {

}
