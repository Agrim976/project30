class Chain{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.07
        }
        this.Chain = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Chain);

    }

    fly(){
        this.Chain.bodyA = null;
    }

    attach(body){
        this.Chain.bodyA = body;
    }

    display(){
        if(this.Chain.bodyA){
        var pointA = this.Chain.bodyA.position;
        var pointB = this.pointB;
        
        strokeWeight(5);
        stroke(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}