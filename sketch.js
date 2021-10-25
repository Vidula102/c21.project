
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground, leftSide, rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_Options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(50,10,20,ball_Options);
	World.add(world,ball);
	console.log(ball);

	ground = new Ground(400,395,800,10);
	leftSide = new Ground(400,350,10,100);
	rightSide = new Ground(600,350,10,100);  
}


function draw() {
  background(51);
  
  ground.show();
  leftSide.show();
  rightSide.show();

  Engine.update(engine);

  fill(255)
  ellipse(ball.position.x, ball.position.y, 20);

  keyPressedrforce();
  keyPresseduforce();
}

function keyPressedrforce() {
	if (keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:2, y:0})
	}

}

function keyPresseduforce(){
	
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-2})
	}
}