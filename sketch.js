
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1 = new Bob(200, 600, 70);
   rof1 = new Roof(400, 25, 800, 15);

   rope1 = new Rope(bob1.body, {x:200, y:25});

   bob2 = new Bob(265, 600, 70);
   rope2 = new Rope(bob2.body, {x:265, y:25});

   bob3 = new Bob(335, 600, 70);
   rope3 = new Rope(bob3.body, {x:335, y:25});

   bob4 = new Bob(405, 600, 70);
   rope4 = new Rope(bob4.body, {x:405, y:25});

   bob5 = new Bob(475, 600, 70);
   rope5 = new Rope(bob5.body, {x:475, y:25});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  

  background(0);

  rof1.display();

  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
  
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:0});
	
	}
  }



