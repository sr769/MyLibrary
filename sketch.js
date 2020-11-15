var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  fixedRect.velocityY = -3;
  movingRect = createSprite(600,200,50,80);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  movingRect.velocityY = 3;

  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "green";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
 
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

