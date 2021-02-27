let image1;
let image2;
let image3;
let image4;
let image5;
let image6;
let image7;
let image8;
let image9;
let image10;
let image11;
let x=[];
let y=[];
let posX;
let posY;


function preload(){
  image1 = loadImage("images/IMG_9568.PNG");
  image2 = loadImage("images/IMG_9569.PNG");
  image3 = loadImage("images/IMG_9570.PNG");
  image4 = loadImage("images/IMG_9571.PNG");
  image5 = loadImage("images/Siri.png");
  image6 = loadImage("images/IMG_9572.PNG");
  image7 = loadImage("images/IMG_9573.PNG");
  image8 = loadImage("images/IMG_9574.PNG");
  image9 = loadImage("images/IMG_9575.PNG");
  image10 = loadImage("images/IMG_9576.PNG");
  image11 = loadImage("images/IMG_9577.PNG");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noCursor();
  imageMode(CENTER);
}


function draw() {
  background(255);
  image(image5,mouseX,mouseY,40,40);

  if(mouseX > windowWidth/2){
    image(image1,100,200,200,350);
    image(image2,800,100,400,600);
    image(image9,500,600,600,900);
    image(image3,300,500,300,400);
    image(image11,1500,400,670,600);
  }else{
    }
  for(let i=0; i<x.length;i++){
    image(image7,x[i],y[i],200,300);
  }
  print(x.length,y.length);
}


function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
}
