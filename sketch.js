const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box,box1,box4;

function setup(){  
    canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,380,400,5);
    ground2 = new Ground(5,200,6,400);
    ground3 = new Ground(400,200,6,400);
    box = new Box(200,20,20,20);
    box1 = new Box(100,200,20,20);
    box2 = new Box(300,200,20,20);
    box4 = new Box(400,200,20,20);    
    }
function draw(){
    background("black");
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  
  box.display();
  box1.display();
  box2.display();
  box4.display();
  }      
