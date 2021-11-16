
let c = 100
var e1 , e2,e3,e4,e5,e6
var m1
let itr = 0
let ang1 = PI*0.6
let r= 400
let incr = 1
let n=800
// PVector ps
// PVector[] ps = new PVector[random(100), random(100)]
// ps = new PVector[n]
// ps[5] = new p5.Vector(random(100), random(100),0)
var ps = []
function setup() {
  // put setup code here
  createCanvas(800,800)
  background(80)
  for (int i=0; i<n; i++){
    var v = createVector(random(800), random(800),0)
    ps.push(v)
  }
  noStroke()
  fill(color(168, 218, 220))
  rect(0,0,width,200)
  fill(color(69, 123, 157))
  rect(0,200,width,200)
  fill(color(29, 53, 87))
  rect(0,400,width,400)
  e1 = new cl1(c)
  m1 = new models()

  frameRate(30)
}


function draw() {

  //let n=72*6;
  //background(100)
  // put drawing code here
  //translate(400,400)

  // m1.wind(frameCount,ps,width,height)
  fill(0, 4);
  noStroke();
  rect(0, 0, width, height);
  stroke(255);
  let f1= 0.015*frameCount;
  let f2= 0.01*frameCount;
  // for (int i=0; i<n; i++) {
  //   PVector[] p= ps[i];
  //   let theta=noise( 0.003*p.x , 0.003*p.y )*4*PI;
  //   PVector[] a= new PVector(cos(theta), sin(theta));
  //   PVector[] b= new PVector(cos(f1), cos(f2) );
  //   PVector[] v= PVector.lerp(a,b,0.4);
  //   p.add(v);
  //   if ( 0.005>random(1.0) ||p.x<0 || p.x>width || p.y<0 || p.y>height){
  //     ps[i]= new PVector(random(width), random(height));
  //   }
  //   let mag= v.mag();
  //   strokeWeight(1 + 0.6/(0.01+mag));
  //   stroke(100*mag, 255, 255);
  //   point(p.x, p.y);
  // }
// itr = itr + incr
//   if (52-itr<0 || itr<0){
//     incr = -incr}
}

function mousePressed(){
  saveCanvas('myCanvas', 'jpg');
}
