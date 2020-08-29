var brick
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16


function setup() {
  createCanvas(800,400);
createSprite(400, 200, 50, 50);

block1  = new block(200,500,20,20);
striker = new Strike(200,500,20,20);
block2  = new block(200,500,20,20);
block3  = new block(200,500,20,20);
block4  = new block(200,500,20,20);
block5  = new block(200,500,20,20);
block6  = new block(200,500,20,20);
block8  = new block(330,235,20,20);
block9  = new block(360,235,20,20);
block10 = new block(390,235,20,20);
block11 = new block(420,235,20,20);
block12 = new block(450,235,20,20);
block13 = new block(360,195,20,20);
block14 = new block(390,195,20,20);
block15 = new block(420,195,20,20);
block16 = new block(390,155,20,20);


}

function draw() {
  background(255,255,255);  
  drawSprites();


block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();





}
