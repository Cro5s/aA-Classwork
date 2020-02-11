// Game.prototype.step method calls Game.prototype.move on all the objects, and Game.prototype.checkCollisions checks for colliding objects

const MovingObject = require('./moving_object')
const Asteroid = require('./asteroid')

function Game(dim_x,dim_y, num_asteroids){
    this.dim_x = dim_x;
    this.dim_y = dim_y;
    this.num_asteroids = num_asteroids;
    this.asteroids = [];
    // this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < this.num_asteroids; i++) {
        // debugger;
        this.asteroids.push(new Asteroid({
            pos:[this.randomPosition(this.dim_x),this.randomPosition(this.dim_y)], 
            game: this,
        }))
    }
}

Game.prototype.randomPosition = function(max_value) {
    min = Math.ceil(0);
    max = Math.floor(max_value);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Game.prototype.draw = function(ctx){
    this.clear(ctx);
    this.asteroids.forEach( function(asteroid) {
        asteroid.draw(ctx)
    })
}

Game.prototype.moveObjects = function() {
    this.asteroids.forEach( function(asteroid) {
        asteroid.move()
    })
}

Game.prototype.clear = function(ctx){
    ctx.clearRect(0,0,this.dim_x, this.dim_y)
}

Game.prototype.wrap = function (pos) {
  
}

module.exports = Game;