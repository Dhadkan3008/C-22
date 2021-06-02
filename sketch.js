const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies;
var engine , world; 
var ground;
var ball;
function setup() { 
createCanvas(800,400); 
engine = Engine.create();//creating the engine
world= engine.world;//linking world to engine
var options={
isStatic : true
}
 ground = Bodies.rectangle(390,390,750,20,options);
World.add(world,ground);
 console.log(ground);

var ball_options={
restitution:2
}
ball=Bodies.circle(400,200,50,ball_options);
World.add(world,ball);

}
function draw() {
background(0); 
Engine.update(engine);
rectMode(CENTER);//alligning the rect
rect(ground.position.x,ground.position.y,750,20);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);
}

