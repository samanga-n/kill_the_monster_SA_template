class Hero {
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0,
            density:1
        }
        this.r=r;
        this.x=x;
        this.y=y;
        //load image for superhero

        this.body=Bodies.circle(x,y,r,options);
        
        
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);      
        fill(204, 102, 153);
         // if in ellipseMode(CENTER), either change this.r given here
        // to this.r*2 OR   in 12th line change it to r/2

        //  display the image of super hero
        
         pop();                      
    }
}