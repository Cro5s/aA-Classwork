
// Stores a Game instance.
// Stores a canvas context to draw the game into.
// Installs key listeners to move the ship and fire bullets.
// Installs a timer to call Game.prototype.step

function GameView(ctx, game) {
  this.game = game;
  this.ctx = ctx;

}

GameView.prototype.start = function(){
  setInterval(() => {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }, 20);

}

module.exports = GameView;