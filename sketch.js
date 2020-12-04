
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperobject,dustbinobject,groundobject
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   paperobject = new paper(200,450,40);
   dustbinobject = new dustbin(1200,650);
   groundobject = new dustbin(width/2,670,width,20);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperobject.display();
  dustbinobject.display();
  groundobject.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperobject.body,paperobject.body.position,{x:85,y:-85});
	}
}


