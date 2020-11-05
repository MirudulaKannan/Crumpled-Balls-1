class Ground{

    constructor(x,y,width,height){

    var options ={

        isStatic: true,
        restitution: 0.3,
        friction: 0.5,
        density: 1.2

    }

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
    World.add(world,this.body);

    }


    display(){

        var paperPos = this.body.position;

        push();
        translate(paperPos.x,paperPos.y);
        rectMode(CENTER);
        fill(250,255,0);
        rect(0,0,this.width,this.height);
        pop();

    }

}