class Particle{
    constructor(x,y) {
        var options = {
            
        }
        this.color = random(0,255),random(0,255),random(0,255)
        this.body = Bodies.circle(x,y,10,options)
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        rotate(angle);
        translate(pos.x,pos.y);
        ellipse(0,0,10);
        pop();
    }
}