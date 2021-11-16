

class cl1{
  constructor(_r){
    this.r = _r
    // this.y = _y
  }
  line_flat(i,opacity=100,h = 400,w = 400,tx=300,ty=200,angle = 180){
    let rad1 = dist(w-i+tx, ty+0,tx+ i, ty+h)/2
    let alph1 = atan((w/2)/(h/2-w+i))
    let new_y = h/2-(h/2)*cos((angle))
    let new_x = (h/2)*sin((angle))
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 1*noiseScale)
    stroke(noiseVal*255,opacity)
    line(tx+new_x+i,ty+i*sin(angle), tx-(h/2)*sin(angle)+i, ty+h+i*sin(angle))
    if(w-i>0){
    }
  }
  line_twist(a=1,i,opacity=10,h = 400,w = 400,tx=300,ty=200,angle = 180,r=24+i,g=78,b= 119,alpha=150){
    //  26-29 33-47

    let rad1 = dist(w-i+tx, ty+0,tx+ i, ty+h)/2
    let alph1 = atan((w/2)/(h/2-w+i))
    let new_y = h/2-(h/2)*cos((angle))
    let new_x = (h/2)*sin((angle))
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 1*noiseScale)
    //stroke(noiseVal*(255),opacity)
    stroke(r,g,b,alpha)
    if(w-i>0 && a==1 && i>0){
      line(tx+new_x+i*cos(angle) , ty+new_x+i*sin(angle), tx+i, ty+h)}
    //  line(tx+h/2-sin(angle) , ty+i, tx+i, ty+h)}
    else if (w-i>0 &&a==2) {
      line(tx+i , ty, tx+new_x+i*cos(angle), ty+new_x-i*sin(angle))}
    else if (w-i>0 &&a==3) {
      line(tx+h-i , ty, tx+new_x-i*cos(angle), ty+new_x+i*sin(angle)-w)}
    else if (w-i>0 &&a==4) {
      line(tx+h-i , ty, tx+new_x-i*cos(angle), ty+new_x-i*sin(angle))}

  }
  line_twist_circle(a=1,i,opacity=10,h = 400,w = 400,tx=300,ty=200,angle = 180,r=24+i,g=78,b= 119,alpha=150){
    //  26-29 33-47

    let rad1 = dist(w-i+tx, ty+0,tx+ i, ty+h)/2
    let alph1 = atan((w/2)/(h/2-w+i))
    let new_y = h/2-(h/2)*cos((angle))
    let new_x = (h/2)*sin((angle))
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 1*noiseScale)
    //stroke(noiseVal*(255),opacity)
    stroke(r,g,b,alpha)
    line(tx+i*cos(0.01*i*angle) , ty+i*sin(angle), tx+100*cos(PI*0.01*i+100)*2, ty+90*sin(i*PI*0.01))
    if(w-i>0 && a==1 ){
      line(tx+i*cos(angle) , ty+i*sin(angle), tx+200*cos(PI*0.01*i), ty+90*sin(i*PI*0.01))}
    //  line(tx+h/2-sin(angle) , ty+i, tx+i, ty+h)}
    else if (w-i>0 &&a==2) {
      line(tx+i , ty, tx+new_x+i*cos(angle), ty+new_x-i*sin(angle))}
    else if (w-i>0 &&a==3) {
      line(tx+h-i , ty, tx+new_x-i*cos(angle), ty+new_x+i*sin(angle)-w)}
    else if (w-i>0 &&a==4) {
      line(tx+h-i , ty, tx+new_x-i*cos(angle), ty+new_x-i*sin(angle))}

  }
  line_flat_Inclined(i,opacity=90,h = 400,w = 100,tx=300,ty=200,angle = 0){
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 1*noiseScale)

    stroke(0, 18, 25,255)
    stroke(noiseVal*225,opacity)

    if(w-i>0){
      line(tx+i*cos(angle), ty+i*sin(angle), tx+i*cos(angle), ty+h+i*sin(angle))}
    }
  line_cone(i,opacity=100,h = 400,w = 300,tx=300,ty=200,angle = 0){
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 2*noiseScale)
    stroke(noiseVal*255,opacity)
    if(w-i>0){
    line(tx+i*cos(angle), ty+i*sin(angle), tx, ty+h)}
  }
  line_Vshape(i,opacity=100,h = 400,w = 400,tx=300,ty=200,angle = 180){
    let rad1 = dist(w-i+tx, ty+0,tx+ i, ty+h)/2
    let alph1 = atan((w/2)/(h/2-w+i))
    let noiseScale=0.02;
    let noiseVal = noise((2+i)*noiseScale, 1*noiseScale)
    stroke(233-i, 216+i, 166+i,opacity)
    //stroke(noiseVal*20,opacity)
    if(w-i>0){
    line(tx+i+rad1*cos((alph1-angle)), ty+rad1*sin((alph1-angle)), tx+i, ty+h)}
  }
  center_(i,opacity=100,h = 300,w = 500,tx=160,ty=200,angle = 0){
    let temp1 = 50
    let rad = dist(w-i+tx, tx+0,ty+ i, ty+h)/2
    let alph = atan((w/2)/(h/2-w+i))
    // w-i+tx, tx+0,ty+ i, ty+h
    //rotate(radians(angle))
    let noiseScale=0.05;
    let noiseVal = noise((mouseX+i)*noiseScale, mouseY*noiseScale)
    stroke(noiseVal*255,opacity)
    if (w-i+temp1>0){
    line(h/2+rad*cos((alph-angle))+tx, h/2-rad*sin((alph-angle))+ty,h/2-rad*cos((alph-angle))+tx,w/2+ty+rad*sin((alph-angle)))}
    //line(h/2+rad*cos((alph-angle))+tx, h/2-rad*sin((alph-angle))+ty,h/2-rad*cos((alph-angle))+tx,w/2+ty+rad*sin((alph-angle)))}
    //line(w-i+tx, ty+0,tx+ i, ty+h)}
  }
  center_bow(i,opacity=100,h = 300,w = 500,tx=160,ty=200,angle = 0,r=24+i,g=78,b= 119,alpha=150){
    let temp1 = 50
    let rad = dist(w-i+tx, tx+0,ty+ i, ty+h)/2
    let alph = atan((w/2)/(h/2-w+i))
    // w-i+tx, tx+0,ty+ i, ty+h
    //rotate(radians(angle))
    let noiseScale=0.05;
    let noiseVal = noise((mouseX+i)*noiseScale, mouseY*noiseScale)
    strokeWeight(0.004*i)
    stroke(r,b,g,alpha)
    //stroke(noiseVal*255,opacity)
    if (w-i+temp1>0){
    //line(h/2+rad*cos((alph-angle))+tx, h/2-rad*sin((alph-angle))+ty,h/2-rad*cos((alph-angle))+tx,w/2+ty+rad*sin((alph-angle)))}
    line(h/2+rad*cos((alph-angle))+tx, h/2-rad*sin((alph-angle))+ty,h/2-rad*cos((alph-angle))+tx,w/2+ty+rad*sin((alph-angle)))}
    //line(w-i+tx, ty+0,tx+ i, ty+h)}
  }
  center_flat_bow(i,opacity=100,h = 300,w = 500,tx=160,ty=200,angle = 0){
    let temp1 = 50
    let rad = dist(w-i+tx, tx+0,ty+ i, ty+h)/2
    let alph = atan((w/2)/(h/2-w+i))
    // w-i+tx, tx+0,ty+ i, ty+h
    //rotate(radians(angle))
    let noiseScale=0.05;
    let noiseVal = noise((mouseX+i)*noiseScale, mouseY*noiseScale)
    stroke(noiseVal*255,opacity)
    if (w-i+temp1>0){
    line(w-i+tx, ty+0,tx+ i, ty+h)}
  }
  waves(i,opacity=100,h = 300,w = 500,tx=160,ty=200,angle = 0){
    let noiseScale=0.05;
    let noiseVal = noise((mouseX+i)*noiseScale, mouseY*noiseScale)
    let c = color(76,201,240);
    //strokeWeight(4)
    stroke(c,opacity)
    line(tx+i,ty+(w+i*100),tx+i,ty+sin(i*0.1)*4)
    // strokeWeight(10)
    // stroke(color(58, 12, 163))
    // point(tx+i,ty+sin(i*0.1)*4)
    //line(tx+i,ty+w/2,tx+i,ty+sin(i*0.1)*4)
  }
  waves_stroke(i,opacity=100,h = 300,w = 500,tx=160,ty=200,angle = 0){
    let noiseScale=0.05;
    let noiseVal = noise((mouseX+i)*noiseScale, mouseY*noiseScale)
    let c = color(76,201,240);
    strokeWeight(5)
    stroke(color(58, 12, 163))
    point(tx+i,ty+sin(i*0.1)*4)
    //line(tx+i,ty+w/2,tx+i,ty+sin(i*0.1)*4)
  }
}
