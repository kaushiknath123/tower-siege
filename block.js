class block extends baseclass {
  constructor(x, y, width, height){
    super(x, y, width, height);
    
  }
  display(){
    if(this.body.speed<2){
    super.display();

    }
    else{
      World.remove(world, this.body);
    }
  }
}