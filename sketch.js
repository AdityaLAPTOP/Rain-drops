var drop1,dr0p2,images,bg="download.jpg";
//var a=randomNumber(3/400)
function preload(){
  images=loadImage("images.png");
//  earthImage=loadImage("earth.jpg");


}

function setup() {
  createCanvas(800,400);
 drop1= createSprite(80, 20, 10, 50);
// sun.addImage("sun",sunImage);
// drop1.debug=true;
 drop2= createSprite(500, 50, 10, 50);
 //earth.addImage("earth",earthImage);
// drop2.debug=true;
drop3= createSprite(100, 100, 10, 50);
drop4= createSprite(140, 150, 10, 50);
drop5= createSprite(170, 180, 10, 50);
drop6= createSprite(230, 260, 10, 50);
drop7= createSprite(270, 290, 10, 50);
drop8= createSprite(350, 340, 10, 50);
drop9= createSprite(380, 380, 10, 50);
drop0= createSprite(480, 460, 10, 50);

 drop1.velocityY=20;
 drop2.velocityY=13;
 drop3.velocityY=23;
 drop4.velocityY=14; 
 drop5.velocityY=29;
 drop6.velocityY=13;
 drop7.velocityY=18; 
 drop8.velocityY=23;
 drop9.velocityY=28;
 drop0.velocityY=26; 

 drop1.addImage("image",images);
 drop2.addImage("image",images);
 drop3.addImage("image",images);
 drop4.addImage("image",images);
 drop5.addImage("image",images);
 drop6.addImage("image",images);
 drop7.addImage("image",images);
 drop8.addImage("image",images);
 drop9.addImage("image",images);
 drop0.addImage("image",images);
 drop1.scale=0.2;
 drop2.scale=0.2;
 drop3.scale=0.2;
 drop4.scale=0.2;
 drop5.scale=0.2;
 drop6.scale=0.2;
 drop7.scale=0.2;
 drop8.scale=0.2;
 drop9.scale=0.2; 
 drop0.scale=0.2; 

 }


function draw() {
  if(drop1.y>400){
    drop1.y=1;
  }
  if(drop2.y>400){
    drop2.y=1;
  }
  if(drop3.y>400){
    drop3.y=1;
  }
  if(drop4.y>400){
    drop4.y=1;
  }
  if(drop5.y>400){
    drop5.y=1;
  }
  if(drop6.y>400){
    drop6.y=1;
  }
  if(drop7.y>400){
    drop7.y=1;
  }
  if(drop8.y>400){
    drop8.y=1;
  }
  if(drop9.y>400){
    drop9.y=1;
  }
  if(drop0.y>400){
    drop0.y=1;
  }
  background(650,190,270); 

  drawSprites();
}