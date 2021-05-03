class Rope {
    constructor(p_rockBody, p_handPoint) {
        var options = {
            bodyA: p_rockBody,
            pointB: p_handPoint,
            length: 10,
            stiffness: 0.004
        }

        this.rope = Constraint.create(options);
        this.handPoint = p_handPoint;
        World.add(world, this.rope);
    }

    display() {
        if (this.rope.bodyA) {
            var pointA = this.rope.bodyA.position;
            var pointB = this.handPoint;
           stroke(48, 22, 8);
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            
            console.log("hello")
        }

    }


    fly() {
        this.rope.bodyA = null;
        
    }

    attach(p_body) {
        this.rope.bodyA = p_body;
        
    }

}//End of class


