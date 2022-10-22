class Base {
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }

        //create the body for base

        
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }

    display(){
        // display the base
      
    }
}