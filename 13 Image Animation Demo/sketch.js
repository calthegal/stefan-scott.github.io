//Image Demo

let lionL, lionR;
let direction = 1;
let pinImages = [];
let counter = 0;
let speed = 1;  //1 - 8
  //1 - left
  //2 - right
function preload(){
  lionL = loadImage('assets/lion-left.png');
  lionR = loadImage('assets/lion-right.png');
  for (let i = 0; i < 9; i++){
    //Load all the images into the array
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));             
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  lions();
  image(pinImages[counter],width/2,height/2);

  speed = map(mouseX, 0, width, 2, 8);
  print(speed);
  if (frameCount % int(speed) === 0){
    counter ++;
    if (counter > 8) counter = 0;
  }
}

function lions(){
  moving();
  imageMode(CENTER);
  push();
  translate(mouseX,mouseY);
  scale(0.5);
  if (direction === 1){
    image(lionL, 0, 0);
  }
  else{
    image(lionR, 0, 0);
  }
  pop();
}
function moving(){
  //determine the direction of mouse movement
  if (mouseX > pmouseX){ //RIGHT
    direction = 2;
  }
  else if (mouseX < pmouseX){ //LEFT
    direction = 1;
  }

}
