var bg,together,tom,jerry;
var tomImg1,tomImg2;
var jerryImg1,jerryImg2;

function preload() {
    //load the images here
bg=loadimage("Images/garden.png")
tomImg1=loadAnimation("images/cat1.png")
tomImg2=loadAnimation("images/cat2.png","images/cat3.png")
jerryImg1=loadAnimation("images/mouse1.png")
jerryImg2=loadAnimation("images/mouse 2.png")


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
tom=createSprite(870,600);
tom.addAnimation("cat1",tomImg1)
tom.scale=0.2;
jerry=createSprite(200,600)
jerry.addAnimation("mouse1",jerryImg1)
jerry.scale=0.15;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
if (tom.x-jerry.x<(tom.width-jerry.width)/2){

    tom.velocityX=0;
    tom.addAnimation("cat2",tomImg2);
    tom.x=300;
    tom.scale=0.2;
    jerry.addAnimation("mouse1,jerryImg2")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyCode===LEFT_ARROW){
tom.velocityX=-5;

}

}
