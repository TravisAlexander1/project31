const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var ground1;

var particles = [];
var pegs = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(width/2,775,width,50);

  for(var i = 0; i<=width; i += 80) {
    divisions.push(new Division(i,height-divisionHeight/2,10,divisionHeight));
  }

  for(var p = 40; p <= width; p += 50) {
    pegs.push(new Pegs(p,75));
  }

  for(var p = 15; p <= width-10; p += 50) {
    pegs.push(new Pegs(p,175));
  }

  for(var p = 40; p <= width; p += 50) {
    pegs.push(new Pegs(p,275));
  }

  for(var p = 15; p <= width-10; p += 50) {
    pegs.push(new Pegs(p,375));
  }
}

function draw() {
  background(0);
  Engine.update(engine);
  ground1.display();

  for(j = 0; j<divisions.length; j++) {
    divisions[j].display();
  }

  for(var p = 0; p<pegs.length; p++) {
    pegs[p].display();
  }

  if(frameCount % 60 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }

  for(var j=0; j<particles.length; j++) {
    particles[j].display();
  }
}