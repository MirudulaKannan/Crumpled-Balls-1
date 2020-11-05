var paper,box;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {

	createCanvas(1200, 400);

  engine = Engine.create();
	world = engine.world;

  paper = new Paper(50,300,50);
  ground = new Ground(600,350,1200,20);

  trash1 = new Trash(800,290,15,100);
  trash2 = new Trash(1000,290,15,100);
  trash3 = new Trash(900,333,200,15);

	Engine.run(engine);
  
}


function draw() {

  background(0);

  paper.display();
  ground.display();

  trash3.display();
  trash1.display();
  trash2.display();
 
}


function keyPressed(){

  if(keyCode === UP_ARROW){

     Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-130});

  }

}