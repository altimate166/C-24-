class Marble{
    constructor(x,y,r){
        var options = {
            restitution:0.3,
            friction:5,
            density:1
        }
        this.x=x;
        this.y=y;
        this.r=r
        this.body=Bodies.circle(this.x, this.y, (this.r-20)/2,options)
        World.add(world, this.body);
    }
    display(){
        var marblepos=this.body.position;
        push();
        translate(marblepos.x, marblepos.y);
        
        strokeWeight(4);
        stroke("black");
        fill('red');
        rectMode(CENTER);
        rect(0, 0, this.r, this.r);
        pop();
    }
}