varship,ship_sail;
varsea,seaImage;

function preload(){
  sea_Img=loadAnimation("sea.png")
  ship_sail1=loadAnimation("ship-1.png","ship-2.png");
  ship_sail1=loadAnimation("ship-1.png","ship-2.png");
  
  seaImg=loadimage("sea.png");
  shipImg1=loadimage("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

ship=createSprite(50,160,20,50);
ship.addAnimaion("sailling",ship_sailling);
  
}

function draw() {
  background("blue");
  if(sea.x < 0 ){
    sea.x=sea.width/2;
  }

  SpriteName.addImage(seaImg);
  SpriteName.addImage(ship_sailling);
  

}
