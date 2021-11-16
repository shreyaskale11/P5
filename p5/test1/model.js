

class models{
  constructor(){
    //this.r = _r
    // this.y = _y
  }
  pattern1(frameCount,opacity=100,h = 100,w = 100,tx=50,ty=50,angle = 0){
    for(let t = 0;t<4;t++){
      for(let j = 0;j<4;j++){
        e1.line_twist(1,frameCount,opacity,h ,w ,t*200,j*200+50,angle)
        e1.line_twist(2,frameCount,opacity,h ,w ,t*200,j*200+50,angle )
        e1.line_twist(3,frameCount,opacity,h ,w ,t*200+100,j*200+150,angle)
        e1.line_twist(4,frameCount,opacity,h ,w ,t*200+100,j*200+50,angle )

        e1.line_twist(1,frameCount,opacity,h ,w ,t*200+50,j*200+50,angle )
        e1.line_twist(2,frameCount,opacity,h ,w ,t*200+50,j*200+50,angle )
        e1.line_twist(3,frameCount,opacity,h ,w ,t*200+50,j*200+150,angle )
        e1.line_twist(4,frameCount,opacity,h,w,t*200+50,j*200+50,angle )}}

  }
  pattern2(itr,opacity=100,h = 100,w = 100,tx=50,ty=50,angle = 0,r=24+i,g=78,b= 119,alpha=150){
    for(let t = -w+10;t<w+100;t=t+20){
      e1.line_twist(1,itr+t,opacity,h ,w ,tx,ty,angle = angle,r,g,b,alpha)
      }
  }
  pattern3(itr,opacity=100,h = 100,w = 100,tx=50,ty=50,angle = 0,r=24+i,g=78,b= 119,alpha=150){
    for(let t = -w;t<w;t=t+6){
      e1.center_bow(itr+t,opacity,h ,w ,tx,ty,angle = angle,r,g,b,alpha)
      }
  }
  cardioid(i1,n,r){
    let s=1+0.05*i1
  for(let i=0;i<n;i++){
    let theta= 2*PI*i/n
    let y= r*sin(theta)
    let x= r*cos(theta)
    let y2= r*sin(s*theta)
    let x2= r*cos(s*theta)
    stroke(42+50, 157+i1, 143-100)
    line(x,y, x2,y2)
  }
  }
  wind(frameCount,ps,width,height){

  // fill(0, 4);
  // noStroke();
  // rect(0, 0, width, height);
  // stroke(255);
  // let f1= 0.015*frameCount;
  // let f2= 0.01*frameCount;
  // for (int i=0; i<n; i++) {
  //   PVector p= ps[i];
  //   let theta=noise( 0.003*p.x , 0.003*p.y )*4*PI;
  //   PVector a= new PVector(cos(theta), sin(theta) );
  //   PVector b= new PVector(cos(f1), cos(f2) );
  //   PVector v= PVector.lerp(a,b,0.4);
  //   p.add(v);
  //   if ( 0.005>random(1.0) ||p.x<0 || p.x>width || p.y<0 || p.y>height){
  //     ps[i]= new PVector(random(width), random(height));
  //   }
  //   let mag= v.mag();
  //   strokeWeight(1 + 0.6/(0.01+mag));
  //   stroke(100*mag, 255, 255);
  //   point(p.x, p.y);
  // }

  }
}
