class PARTICAL {
    constructor(x,y){
        var options = {
            isStatic: false
        }

        this.body = Bodies.circle(x,y,20);
        World.add(world, this.body, options);
        this.raduis = 20;
    }

    display(){
        var pos = this.body.position;

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y, this.raduis * 2);
        fill(255,255,255);
    }
}