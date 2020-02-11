// Spacerock. It inherits from MovingObject
const Util = require("./utils.js");
const MovingObject = require("./moving_object.js");

function Asteroid(options) {
//   debugger;
  MovingObject.call(this, {
    pos: options["pos"], 
    color: '#808080', 
    radius: 20, 
    vel: [5,5],
    game: options.game,
  });
  
}
Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid