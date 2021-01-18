class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 30
        }
        
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
        this.sling.bodyA = polygon;
    }
    
    fly(){
        this.sling.bodyA = null;
    }


    display(){
       
if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    push();
                
    stroke("lightBlue");
                
    strokeWeight(5);
  
    line(pointA.x  , pointA.y, pointB.x , pointB.y);
                    
            
                
    pop();
           }
      }
    
}