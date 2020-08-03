//Create variables here
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var dog,dogIMG;
var fedtime 
var lastfed;
var foodObj;
var foodStock,lastfed;
function preload()
{
  dogIMG = loadImage("images/dogImg.png");
  dogimg = loadImage("images/dogImg1.png");
	//load images here
}
var database;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
    world = engine.world;
database = firebase.database()
  dog = createSprite(690,350); 
  dog.addImage(dogIMG);
  dogIMG.scale = 1.0
  
  r = new Food(310,400,50,50)
  s = new Food(300,400,50,50)

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
  

 
}
function draw() {  
background("black");
Engine.update(engine);

Button = createButton('Feed The Pet')
Button1 = createButton('Add Food')
Button1.position(750,140)
Button.position(650,140)

fill("pink")
imageMode(CENTER);
image(dogIMG,dog.position.x,dog.position.y);


text("Last Feed:5pm",200,100);
r.display()
s.display()
 
  drawSprites();
  textSize(20)
  fill("white")
  stroke("white");
  
  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}

