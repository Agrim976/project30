class Box{
    constructor(x,y,color){
        
        
        this.body = Bodies.rectangle(x,y,50,70,color);
        this.color = color;
        this.width = 50;
        this.height = 70;
        this.Visiblity = 255;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        
      
        if(this.body.speed < 5){
            fill(this.color);
            strokeWeight(5);
            rect(pos.x,pos.y,this.width,this.height);
            
        }
        else{
            
            push();
            World.remove(world,this.body);
            this.Visiblity = this.Visiblity-5;
            //tint(255,this.Visiblity);
            pop();
        }

      }

}