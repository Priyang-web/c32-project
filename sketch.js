const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bgImg;
var snowSong;
var snowfall =[];


function preload(){
   bgImg = loadImage("snow1.jpg");
   snowSong = loadSound("snowSong.mp3");
}
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  snowSong.loop();
  



}

function draw() {
  background(bgImg);  
  Engine.update(engine);

  if (frameCount%5===0) {
    snowfall.push(new Snowfall(random(1,800), 10,30));
  } 
  //display the snowfall
  for (var j = 0; j < snowfall.length; j++) {
    snowfall[j].display();
  }
  drawSprites();
}