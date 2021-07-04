var bgImg;
var catImg1, mouseImg1, catImg2, mouseImg2;
var cat, mouse;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    mouseImg1 = loadAnimation("images/mouse1.png")
    catImg2 = loadAnimation("images/cat2.png", "images/cat3.png")
    mouseImg2 = loadAnimation("images/mouse2.png", "images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   cat = createSprite(400,400,200,200);
   cat.addAnimation("catImg1", catImg1);
   mouse = createSprite(320,300,200,200);
   mouse.addAnimation("mouseImg1", mouseImg1);
   
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
 if(cat.x - mouse.x < (cat.width - mouse.width)/2){
     cat.velocityX = 0;
     cat.addAnimation("catImg2", catImg2);
     cat.x = 300;
     cat.scale = 0.12
     mouse.addAnimation("mouseImg2", mouseImg2)
     mouse.scale = 0.12
 }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
     mouse.addAnimation("mouseTeasing", mouseImg2);
     mouse.changeAnimation("mouseTeasing");
     mouse.frameDelay = 25;
 }

}
