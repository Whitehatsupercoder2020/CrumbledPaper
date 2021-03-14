class Paper{
    constructor(x,y,radius){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        
        World.add(world,this.body);
    }
    
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
       
        rectMode(CENTER);
        strokeWeight(4);
        stroke("green")
        fill (255);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
    };