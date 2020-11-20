/*//name spacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
//variables
var engine,world,object,option,ball,option1;
function setup() 
{
  createCanvas(400,400);
  //creating engine
  engine=Engine.create();
  //creating world
  world=engine.world;
  option={
    isStatic:true
  }
  option1={
    restitution:1.0
  }
  //creating object
  object=Bodies.rectangle(200,390,400,20,option);
  ball=Bodies.circle(200,100,20,option1);
  //adding in world
  World.add(world,object);
  World.add(world,ball);
  console.log(object.position.x);//to print object property
  console.log(object.position.y);//to print object property
}
function draw()
{
  background("pink"); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(object.position.x,object.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
}*/
var bullet,wall,weight,deformation,thickness;
var box1,box2,box3;
var line1;
function setup()
{
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  line1=createSprite(600,200,1200,20);
  //creating a car
  bullet=createSprite(30,100,150,20);
  bullet.velocityX=speed;
  bullet.shapeColor="white";
  //creating wall for to car to collide
  wall=createSprite(1200,200,thickness,4400);
  wall.shapeColor=color(80,80,80);
  
  

  console.log(deformation);
  console.log("Weight "+weight);
  console.log("Speed" +speed);
  console.log("thickness is "+thickness);
}
function draw()
{
  background("black");
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    deformation=0.5*weight*speed*speed/(Math.cbrt(thickness));
  }
  if(deformation>10)
  {
    wall.shapeColor=color(255,0,0);
  }
  else
  {
    wall.shapeColor=color(0,255,0);
  }
  drawSprites();

}
function hasCollided(bullet,wall)
{
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}