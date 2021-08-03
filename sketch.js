  var path,invisiblepath;
  var Runner;
 
function preload(){
  //pre-load images

  pathImg=loadImage("path.png");

  Runner_running = loadAnimation("Runner-1.png","Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  Runner_running=createSprite(200,200);
  Runner_running.addAnimation("Runner-1.png","Runner-2.png");
  Runner_running.velocityY = 0;
  Runner_running .scale = 0.1;
  
  invisibleGround1= createSprite(10,200,10,400);
  invisibleGround1.visible =false ;

  invisibleGround2 = createSprite(390,200,10,400);
  invisibleGround2.visible =false;
}

function draw() {
  background("black");
 
  

  if(path.y > 400){
    path.y = height/2;
    
   Runner.y = World.mouseY;
 

      Runner.collide(invisibleGround1);
      Runner.collide(invisibleGround2);
    }
    drawSprites();
}
