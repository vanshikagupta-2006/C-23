const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
    world = engine.world;
  box1 = new Box(270, 200, 100, 50);
  box2 = new Box(250, 140, 100, 100);
  box3 = new Box(400, 250, 100, 50);
  box4 = new Box(400, 200, 100, 50);
  box5 = new Box(500, 150 , 100, 50);
  box6 = new Box(300, 200, 100, 50);
  box7 = new Box(280, 200, 60, 300);
  
}

function draw() {
  background(255,255,255);  
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
}