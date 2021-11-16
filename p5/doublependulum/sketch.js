
var e1
var m1
let itr = 0
let incr = 0.1
function setup() {
  // put setup code here
  createCanvas(900,800)
  background(120)
  // noStroke()
  // fill(color(168, 218, 220))
  // rect(0,0,width,200)
  // fill(color(69, 123, 157))
  // rect(0,200,width,200)
  // fill(color(29, 53, 87))
  // rect(0,400,width,400)
  // e1 = new cl1(c)
  m1 = new models()
}

function draw() {
  let f = 120
  // background(80)
  // put drawing code here
  m1.doublependulum(itr,width,height,200,PI*0.5,f)
  textSize(100)
  text(f,100,200)


  itr = itr + incr
    if (f-itr<0 || itr<0){
      incr = -incr}
}
