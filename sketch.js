
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Paper

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    Paper=new paper()
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  keyPressed();
  Paper.display()
  drawSprites();
}

function keyPressed()
{
  if(keyCode===UP_ARROW)
  {
    Matter.Body.applyForce(paperObject,paperObject.body.position,{x:85,y:85})
  }
}





