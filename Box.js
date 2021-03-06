class Box 
{
  constructor(x, y, width, height) {
    var options = {
        'isStatic':true,
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
    }

    display(){
      push();
      translate(this.body.position.x, this.body.position.y);
      fill("lightblue");
      rectMode(CENTER);
      rect(this.x,this.y,this.width, this.height);
      pop();
    }
};
