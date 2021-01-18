const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine,world;
var base1,base2;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18;
var box19,box20,box21,box22,box23,box24;
var box25,box26,box27,box28;
var box29,box30;
var box31,box32,box33,box34,box35,box36;
var box37,box38,box39,box40;
var box41,box42,slingShot;
var polygonImg,polygon;
var score=0
function preload(){
polygonImg=loadImage("polygon.png")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base1=new Ground(600,350,310,15)
    base2=new Ground(1000,200,240,15)
  //first floor
    box1=new Box(465,322,30,40)
    box2=new Box(495,322,30,40)
    box3=new Box(525,322,30,40)
    box4=new Box(555,322,30,40)
    box5=new Box(585,322,30,40)
    box6=new Box(615,322,30,40)
    box7=new Box(645,322,30,40)
    box8=new Box(675,322,30,40)
    box9=new Box(705,322,30,40)
    box10=new Box(735,322,30,40)
    //second floor
    box11=new Box(495,282,30,40)
    box12=new Box(525,282,30,40)
    box13=new Box(555,282,30,40)
    box14=new Box(585,282,30,40)
    box15=new Box(615,282,30,40)
    box16=new Box(645,282,30,40)
    box17=new Box(675,282,30,40)
    box18=new Box(705,282,30,40)
    //third floor
    box19=new Box(525,242,30,40)
    box20=new Box(555,242,30,40)
    box21=new Box(585,242,30,40)
    box22=new Box(615,242,30,40)
    box23=new Box(645,242,30,40)
    box24=new Box(675,242,30,40)
    //fourth floor
    box25=new Box(555,202,30,40)
    box26=new Box(585,202,30,40)
    box27=new Box(615,202,30,40)
    box28=new Box(645,202,30,40)
    //last floor
    box29=new Box(585,162,30,40)
    box30=new Box(615,162,30,40)

    //first f
    
    box31=new Box(920,173,30,40)
    box32=new Box(950,173,30,40)
    box33=new Box(980,173,30,40)
    box34=new Box(1010,173,30,40)
    box35=new Box(1040,173,30,40)
    box36=new Box(1070,173,30,40)

   // 2nd f
   box37=new Box(950,133,30,40)
   box38=new Box(980,133,30,40)
   box39=new Box(1010,133,30,40)
   box40=new Box(1040,133,30,40)
   //last f
   box41=new Box(980,93,30,40)
   box42=new Box(1010,93,30,40)

   polygon=Bodies.circle(50,200,20);
   World.add(world,polygon)

   slingShot=new SlingShot(this.polygon,{x:200,y:200})
   


  
  
 
    

}

function draw(){
    background("black")
   Engine.update(engine)
    base1.display()
    base2.display()
    fill ("pink")
    box1.display()
    box1.score()
    box2.display()
    box2.score()
    box3.display()
    box3.score()
    box4.display()
    box4.score()
    box5.display()
    box5.score()
    box6.display()
    box6.score()
    box7.display()
    box7.score()
    box8.display()
    box8.score()
    box9.display()
    box9.score()
    box10.display()
    box10.score()
    fill("lightBlue")
    box11.display()
    box11.score()
    box12.display()
    box12.score()
    box13.display()
    box13.score()
    box14.display()
    box14.score()
    box15.display()
    box15.score()
    box16.display()
    box16.score()
    box17.display()
    box17.score()
    box18.display()
    box18.score()
    fill ("yellow")
    box19.display()
    box19.score()
    box20.display()
    box20.score()
    box21.display()
    box21.score()
    box22.display()
    box22.score()
    box23.display()
    box23.score()
    box24.display()
    box24.score()
    fill(rgb(177,156,217))
    box25.display()
    box25.score()
    box26.display()
    box26.score()
    box27.display()
    box27.score()
    box28.display()
    box28.score()
    fill("grey")
    box29.display()
    box29.score()
    box30.display()
    box30.score()
fill("grey")
   
    box31.display()
    box31.score()
    box32.display()
    box32.score()
    box33.display()
    box33.score()
    box34.display()
    box34.score()
    box35.display()
    box35.score()
    box36.display()
    box36.score()

    fill(rgb(177,156,217))
    box37.display()
    box37.score()
    box38.display()
    box38.score()
    box39.display()
    box39.score()
    box40.display()
    box40.score()
   fill ("yellow")
   box41.display()
   box41.score()
   box42.display()
   box42.score()


  
    imageMode (CENTER)
   image(polygonImg,polygon.position.x,polygon.position.y,40,40)
  
   slingShot.display()
   noStroke();
   textSize(15)
   fill("white")
   text("Score  " + score, 100, 50)
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
slingShot.attach(polygon.body)
  }
}
async function getBackgroundImg(){
  var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON=  await response.json();
  console.log(responseJSON);
  console.log(responseJSON.datetime);
  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(hour);

  if(hour>=06 && hour<=18){
      background("white")
  }
  else{
    background("black")
  }
  



  }