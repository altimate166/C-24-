const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;
var marble1, marble2, marble3, marble4, marble5;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
  
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,70)
    iron = new Iron(300,350)
    stone = new Stone(700,120,100,100)
    
    marble1 = new Marble(505,450,10)
    marble2 = new Marble(510,450,10)
    marble3 = new Marble(515,450,10)
    marble4 = new Marble(520,450,10)
    marble5 = new Marble(525,450,10)




}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    iron.display();
    stone.display();
   
    marble1.display();
    marble2.display();
    marble3.display();
    marble4.display();
    marble5.display();
    
 
}