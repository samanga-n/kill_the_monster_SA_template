class iv_Base {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        // create a rectangular body for the base of monster

        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        // display the base
      
    }
}