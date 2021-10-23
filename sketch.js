var box;
function setup() {
  createCanvas(500,500);
  box = createSprite(250,250,30,30);
  box.shapeColor = "white";
  box.velocityX = 0
  box.velocityY = 0
  
}
function draw() 
{
  background("black");
  createEdgeSprites()
  if (keyDown("right")) {
    box.velocityX = 6
  }
  if(keyDown("left")) {
    box.velocityX = -6
  }

  drawSprites();

}




