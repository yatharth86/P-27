const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1,rope2,rope3, rope4,rope5;



function setup() 
{
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	roof =  Bodies.rectangle(575, 100, 300 , 15, {isStatic: true});
	World.add(world, roof);

	bob1 = new Bob(500, 400, 20);
	rope1 = new Rope(bob1.body, {x: 500, y: 100});

	bob2 = new Bob(540, 400, 20);
	rope2 = new Rope(bob2.body, {x: 540, y: 100});

	bob3 = new Bob(580, 400, 20);
	rope3 = new Rope(bob3.body, {x: 580, y: 100});

	bob4 = new Bob(620, 400, 20);
	rope4 = new Rope(bob4.body, {x: 620, y: 100});

	bob5 = new Bob(660, 400, 20);
	rope5 = new Rope(bob5.body, {x: 660, y: 100});
}


function draw()
{
  background(13, 45, 68);

  Engine.update(engine);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  rectMode(CENTER);
  stroke("crimson");
  fill("crimson");
  rect(roof.position.x, roof.position.y, 300, 15);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
}

function keyPressed() 
{
	  if (keyCode === LEFT_ARROW) 
	  {
    	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:-45}); 
	  }
		
	  if (keyCode === RIGHT_ARROW) 
	  {
    	Matter.Body.applyForce(bob5.body, bob5.body.position, {x:50, y:-45}); 
  	  }
}







