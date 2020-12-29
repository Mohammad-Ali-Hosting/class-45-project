var bg, bgimg;
var theif, thiefimg;
function preload() {
  bgimg=loadImage("img/bg.png")
  theifimg=loadAnimation("img/001.png","img/002.png","img/003.png","img/004.png")
}
function setup() {
  createCanvas(600,400);
  bg=createSprite(300,200);
  bg.addImage(bgimg);
  bg.scale=1.6;

  thief=createSprite(250,350,50,70);
  thief.addAnimation("running",thiefimg);
}
function draw() {
  background("black")
  if (bg.x<0) {
    bg.x=250
  }
  // bg.velocityX=-2
  drawSprites();
}