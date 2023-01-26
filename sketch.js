let x,y;
let vx,vy;
let num = 30;

function setup() {
  createCanvas(800, 800);
  x = width / 2;
  y = height / 2;
  vx = -1.1;
  vy = 1.3;
}

function draw() {
  background(0,0,175, 9);  
  stroke(2222)
  strokeWeight(0.41);
  for(let i = 0 ; i < 1000; i++){
    point(random(width), random(height));
    noFill();
  }
  
  for (let i=0; i<num; i++){
    
    let _x = i * (x/num);
    let _y = i * (y/num);
    
    let szx = width - (width/num * i);
    let szy = height - (height/num * i);
    let sec = second();
    
    quad(40, szy, y, x,_x,_y,y,vx );
    quad(x,_x, szx, _x,y,vy,x,_x );
    
  }
  
  x += vx;
  y += vy;
  
  if (x <= 0 || x >= width){
   vx *= -1;
    
  }
  
  if (y <= 0 || y >= height){
    vy *= -1;
    
  }
}
