let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let grid = Array.from(Array(8), () => new Array(8));
  //let grid = Array.from({ length: 8 }, () => Array.from({ length: 8 }))
    grid[3][4] = new Piece("black");
    grid[4][3] = new Piece("black");
    grid[3][3] = new Piece("white");
    grid[4][4] = new Piece("white");
  return grid;
};

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  let row = pos[0];
  let col = pos[1];
  
  if ( this.isValidPos(pos) === true ) {
    if ( this.grid[row][col] === undefined ){
      return undefined;
    } else {
      let possiblePiece = this.grid[row][col];
      return possiblePiece;
    };
  } else {
    throw new Error('Not valid pos!');
  };
};


/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) { 
      if ( this.grid[i][j] !== undefined ) {  
       let piece = this.grid[i][j];
    
        if ( piece.color === color) {
          const b = this;

          Board.DIRS.forEach(function(pos_move){
            const newRow = pos_move[0] + i;
            const newCol = pos_move[1] + j;
            const newPos = [newRow, newCol];

            if ( b.isOccupied(newPos) === false ) {
              return true;
            };
          });
        };
      };
    };
  };
  return false
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let row = pos[0];
  let col = pos[1];

  if (this.grid[row][col] !== undefined) {
    let piece = this.grid[row][col];
    return piece.color === color;
  };
};
/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let row = pos[0];
  let col = pos[1];
  if ( this.grid[row][col] === undefined ){
    return false;
  } else {
    return true;
  };
};

/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  let bCounter = 0;
  let wCounter = 0;

  let spotCounter = 0; 

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if (this.grid[i][j] !== undefined) {
          spotCounter++;
        };
      };
    };

    if (spotCounter === 64){
      return true;
    };

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      let spot = [i, j]
        if ( this.isOccupied(spot) === true){
          if (this.isMine(spot, "black") === true) {
            bCounter++; 
          } else {
            wCounter++;
          };
        };
      };
    };

  if (bCounter === 0 || wCounter === 0) {
    return true;
  };

  return false; 
};

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let row = pos[0];
  let col = pos[1];

  if ( (row < 8) && (row >= 0) && (col < 8) && (col >= 0) ) {
    return true;
  } else {
    return false;
  };
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns null if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns null if it hits an empty position.
 *
 * Returns null if no pieces of the opposite color are found.
 */
function _positionsToFlip (board, pos, color, dir, piecesToFlip) {
}

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

module.exports = Board;
