const Engine = Matter.Engine; 
const World = Matter.World ; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint
var engine, world;
var divisionHeight = 300; 
var particles = []; 
var plinkos = []; 
var divisions = []; 
function setup() {
  var canvas = createCanvas(800, 800); 
  engine = Engine.create(); 
  world = engine.world; 
  for (var k = 0; k<= width; k = k + 80){
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight)); 
  }
  ground = new Ground(width/2,height,width,20);
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75)); 
  }
  for (var j = 15; j <=width-10; j=j+50); 
  {
    plinkos.push(new Plinko(j,175)); 
  }
  for (var j = 80; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,175)); 
  }
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,275)); 
  }
  for (var j = 80; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,375)); 
  }
}

function draw() {
  background(0);  
  drawSprites();
  Engine.update(engine)
  ground.display(); 
  for (var j = 0; j < particles.length; j++){

    particles[j].display(); 
  }
  for (var k = 0; k < plinkos.length; k++) {
  plinkos[k].display(); 
 }
  for (var j=0; j < divisions.length; j++) {

    divisions[j].display(); 
  }
  if (frameCount%50==0)
{
  particles.push(new Particle(random(width/2-30,width/2+30),10,10))
}
for (var j=0; j < particles.length; j++) {

  particles[j].display(); 
}
}
