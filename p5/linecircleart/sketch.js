
let v = 100
let t = 150
var e1 , e2,e3,e4,e5,e6

//-----------------------------------------------------------------
function preload(){
  img = loadImage("1.jpg");
}

function setup() {
  // put setup code here
  createCanvas(1920,1080,WEBGL)

  background(100)
  //frameRate(10)
  // // console.log("haghj"
  e1 = new Ell(v,t)
  e2 = new Ell(v,t)
  e3 = new Ell(v,t)
  e4 = new Ell(v,t)
  e5 = new Ell(v,t)
  e6 = new Ell(v,t)
  textAlign(CENTER, CENTER);
}

//-----------------------------------------------------------------
var p = 10

function draw() {
  //textSize(100)
  //fill(0, 102, 153)

  //text('millis',100,600)
     e2.boxshape(frameCount)
    //translate(500,500)
    e1.boxshape(frameCount)


   //  e3.boxshape()
   //  e4.boxshape()
   //  e5.boxshape()
   //   e6.boxshape()


}

//-----------------------------------------------------------------
class Ell {
  constructor(_x,_y){
    this.x = _x
    this.y = _y
  }
  ell(){
    stroke(100)
    fill(0)
    ellipse(this.x,this.s,40,40)
  }
  mov(_s){
    this.s = _s
    ellipse(this.x+this.s,this.y,40,40)
  }
  boxshape(i){
    //translate(random(0,width*0.8),random(0,height*0.8));
    let step = 1
    if (i>=100*1){
      i=-i
      step +=1
    }
    rotateZ(millis()/10)

    stroke(random(100,150),random(100,150),random(100,150))
    strokeWeight(random(0.2,10));
    beginShape();
      line(i, 0,0 , i);
      // line(-i, 0,0 , i);
      // line(i, 0,0 , -i);
      // line(-i, 0,0 ,- i);
    //  for (var i = 1; i <= width; i+=random(10,30)) {
      //   var x = cos(angle*i) *radius;
      //  var y = sin(angle*i)* radius;
      //  var x1 = cos(angle*i+3) *radius;
      // var y1 = sin(angle*i+3)* radius;
       // line(i, 0,0 , i);
       //  line(-i, 0,0 , i);
       //  line(i, 0,0 , -i);
       //  line(-i, 0,0 ,- i);
  // vertex(x, y);
      //}
    endShape(CLOSE)
  }
}

function mousePressed(){
    // saveCanvas('D:\Atom\DATA\cardioid\1myCanvas', 'jpg');
}
//var circleResolution = map(mouseY, 0, height, 2, 80);
//var radius = mouseX - width / 2 + 0.5;
//var angle = TWO_PI / circleResolution;

//endShape(CLOSE);
//translate(width *2, height *2 );

//   var tileCount = floor(width / max(mouseX, 5));
//   var rectSize = width / tileCount
//   img.loadPixels();
//   colors = [];
//   for (var gridY = 0; gridY < tileCount; gridY++) {
//     for (var gridX = 0; gridX < tileCount; gridX++) {
//       var px = int(gridX * rectSize);
//       var py = int(gridY *rectSize);
//       var i = (py * img.width + px) * 4;
//       var c =color(img.pixels[i], img.pixels[i+1], img.pixels[i+2],img.pixels[i+3]); colors.push(c);
//     }
//   }
//   gd.sortColors(colors, sortMode);
//   var i = 0;
//     for (var gridY = 0; gridY < tileCount; gridY++) {
//       for (var gridX = 0; gridX < tileCount; gridX++) {
//         fill(colors[i]); rect(gridX*rectSize, gridY*rectSize,rectSize, rectSize);
//         i++;
//       }
//     }
// }

// colorMode(HSB, 360, width,height);
//  //rectMode(CENTER);
// translate(-width/2 , -height/2 );
//
// var angleStep = 360 / 20;
// beginShape(TRIANGLE_FAN);
//   vertex(width / 2, height / 2);
//   for (var angle1 = 0; angle1 <=360; angle1 += angleStep) {
//     var vx = width / 2 + cos(radians(angle1)) * 100;
//     var vy =height / 2 + sin(radians(angle1)) * 100;
//     vertex(vx, vy);
//     strokeWeight(10)
//     fill(angle, mouseX, mouseY);
//   }
//   //fill(0)
// //  rect(100,111,100,100)
// endShape(CLOSE);
//translate(2*width, 2*height )
// e1.ell()
//
// e2.ell()
// e2.mov(frameCount)
// p += 10

//box(100)
//noLoop()
