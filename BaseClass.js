class BaseClass {
    constructor(x,y,w,h,color) {
        var options = {
            isStatic: true
        }

        this.object = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.object);

        this.w = w;
        this.h = h;
        this.color = color;
    }

    display() {
        var pos = this.object.position;
        push();
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}