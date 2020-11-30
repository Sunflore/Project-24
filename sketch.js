
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom, leg1, leg2;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;

	paper= new Paper(100,100,25,25);

	ground = new Ground(width/2,height-25,width,20);

	leg1=createSprite(725,height-120,20,150,{isStatic:true});
	leg1.shapeColor=color("blue");
	noStroke();
	bottom=createSprite(635,height-45,200,20,{isStatic:true});
	bottom.shapeColor=color("blue");
	noStroke();
	leg2=createSprite(545,height-120,20,150,{isStatic:true});
	leg2.shapeColor=color("blue");
	noStroke();


	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("grey");
  
	ground.display();
	paper.display();

  drawSprites();
 
}

function keyPressed()
{
	if(keyCode=== UP_ARROW)
	{
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



