let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(600, 600);
   background(color(1000,0,0));
  cor = color(random(0,265), random(0,265), random(0,265));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,100)
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}