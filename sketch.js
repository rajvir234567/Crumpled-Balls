
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 640);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(200,200);
  ground = new Ground(600,640,1200,20);
  dustbin1 = new Dustbin(900,620,200,20);
  dustbin2 = new Dustbin(800,520,20,200);
  dustbin3 = new Dustbin(1000,520,20,200);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  paper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}