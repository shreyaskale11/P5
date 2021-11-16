class models{
  // constructor(){
  //   //this.r = _r
  //   // this.y = _y
  // }
  doublependulum(itr,w=width,h=height,l = 10,n1 = PI*0.5,n2 =PI*0.5 ){
    strokeWeight(0.1)

    line(w/2,h/2,w/2+l*cos(n1+itr*0.1),h/2+l*sin(n1+itr*0.1))
    line(w/2+l*cos(n1+itr*0.1),h/2+l*sin(n1+itr*0.1),
      0.2*(w/2+l*cos(n1+itr*0.1)*0.5),0.2*(h/2+l*sin(n1+itr*0.1)*0.5))

  }
}
