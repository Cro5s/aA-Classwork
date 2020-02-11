const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

window.addEventListener('DOMContentLoaded', function(){

    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d')

    const game = new Game(300,150,5)
    game.addAsteroids()
    const gv = new GameView(ctx, game);
    gv.start();
  
    const mo = new MovingObject({
        pos: [30, 30],
        vel: [10, 10],
        radius: 5,
        color: "#00FF00",
        game: game,
      });
    
    mo.draw(ctx) 


    // todo – remove
    window.ctx = ctx;
    window.mo = mo;
    window.game = game;
    window.gv = gv;
})

