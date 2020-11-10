var a, b,c;

function setup() {
  createCanvas(1200,800);
  a = createSprite(600, 400, 50, 80);
  a.shapeColor = "green";
 
  b= createSprite(400,200,80,30);
  b.shapeColor = "green";

  c= createSprite(300,400,80,30);
  c.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  a.x = World.mouseX;
  a.y = World.mouseY;

  if(collide(a,b)){
    a.shapeColor = "red";
      b.shapeColor = "red";
  }
  else {
    a.shapeColor = "green";
    b.shapeColor = "green";
  }
  drawSprites();
}