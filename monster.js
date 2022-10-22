class Monster{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			// restitution :0,
			// friction :1,
			// density :1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		// load image for the monster

		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push();
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle);
		fill(255,0,255)
		imageMode(CENTER);
		ellipseMode(RADIUS);
		//  display the monster image
		
		pop();
 }
}