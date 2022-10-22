const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


function preload() {
//preload the images here
bg = loadImage("images/GamingBackground.png")

}

function setup() {
 
  createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

  myBase= new Base(460,500,500,10);
  myHero = new Hero(200,250,200);
  iv_thread = new Thread(myHero.body,{x:50, y:11});

  

  
	


}

function draw() {

  background(bg);
  Engine.update(engine);

  // display base
 

  //  display superhero

//  display the invisible thread
  
  
 
}
function mouseDragged(){
  Matter.Body.setPosition(myHero.body,{x:mouseX,y:mouseY});
}
