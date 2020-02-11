// MovingObject.prototype.move

// MovingObject.prototype.draw(ctx)

// MovingObject.prototype.isCollidedWith(otherMovingObject)

function MovingObject(options){
    this.pos = options["pos"];
    this.vel = options["vel"];
    this.radius = options["radius"];
    this.color = options["color"];
    this.game = options.game;
}

MovingObject.prototype.draw = function(ctx){
    this.clear(ctx);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fill();
}

MovingObject.prototype.move = function(){
    this.pos = [this.pos[0]+this.vel[0], this.pos[1]+this.vel[1]];
}

MovingObject.prototype.clear = function(ctx){
    const boundingBox = this.radius +1;
    ctx.clearRect(this.pos[0] -  boundingBox, this.pos[1] -  boundingBox, boundingBox * 2, boundingBox * 2);
}

// bounding box 
// pos x,y = center
// x - radius, y - radius = top left corner
// 


module.exports = MovingObject;
