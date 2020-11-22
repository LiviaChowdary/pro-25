
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,height,width,50);

	paper = new Paper(200,100,20);

	bin1 = new Dustbin (540, 660, 200,20);
	bin2 = new Dustbin (450, 600, 20,100);
	bin3 = new Dustbin (630, 600, 20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();
  
  bin1.display();
  bin2.display();
  bin3.display();

  

}
function keyPressed(){
  if (keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:-50});
  }


}



