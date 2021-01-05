class Bob
{
	constructor(x,y,r)
	{
		var options = {
			isStatic: false,
			restitution: 1,
			friction: 0,
			density: 0.8
		}

		this.x = x;
		this.y = y;
		this.r = r;
		
		this.body = Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var bobpos=this.body.position;
		push();
		ellipseMode(RADIUS);
		stroke("black");
		fill("olive");
		ellipse(bobpos.x, bobpos.y, this.r, this.r);
		pop();	
	}
}

