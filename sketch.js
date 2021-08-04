var garden,rabbit;
var gardenImg,rabbitImg;
var leaves,orangeleaves,redleaf;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

function createApples(){
  apple=createSprite(Random(50,350),40,10,10);
  apple.addImage(rabbitImg);
  apple.scale=0.1;
  apple.velocityY=-1;
  apple.lifetime=100;
  
}
}


function draw() {
  background(0);

  rabbit.x=world.mouseX

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
var select_sprite=Math.round(Random(1,2));
if(framecount % 80==0){
  if(select_sprite==1){
  }
    functioncreatapple
  }
  else{
functioncreatleaves

leaves=createSprite(Random(50,350),40,10,10);
  leaves.addImage(leavesImg);
  leaves.scale=0.1;
  leaves.velocityY=-1;
  leaves.lifetime=100;

functionCreateaorangeleaf

orangeleaf=createSprite(Random(50,350),40,10,10);
orangeleaf.addImage(orangeleafImg);
orangeleaf.scale=0.1;
orangeleaf.velocityY=-1;
orangelef.lifetime=100;

  functionCreateredleaf

  redleaf=createSprite(Random(50,350),40,10,10);
  redleaf.addImage(redleafImg);
  redleaf.scale=0.1;
  redleaf.velocityY=-1;
  redleaf.lifetime=100;

  
  }