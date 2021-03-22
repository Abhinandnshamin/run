var car,wall;
var speed,weight;
var deformation
var green

function setup() {
  createCanvas(1600,400);
  car=createSprite(400, 200, 30, 30);
  wall=createSprite(1500, 200, 30, 200);
 speed=random(55,90)
 weight=random(400,1500)
}
 

function draw() {
  background(80,80,80);
  deformation=(0.5*weight*speed*speed)/22500;
  car.velocityX=speed;
  if(deformation < 100 &&
    wall.x-car.x < (car.width+wall.width)/2){
    car.shapeColour="green"
    car.velocityX=0
  }
  
  else if(deformation>100 && deformation<180 && 
      wall.x-car.x < (car.width+wall.width)/2){
    car.shapeColor=" yellow"
    car.velocityX=0
  }
  else if(deformation>180 && 
      wall.x-car.x < (car.width+wall.width)/2){
    car.shapeColor="red"
    car.velocityX=0}
}
drawSprites();
console.log(deformation)

}
