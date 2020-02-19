import * as Minesweeper from "../minesweeper";

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: new Minesweeper.Board()
    };

    this.updateGame = this.updateGame.bind(this);
  }

  render() {
    return <div>
      <h1>Minesweeper</h1>
      <div>
        <Board board = {this.state.board} updateGame = {this.updateGame}/>
      </div>
    </div>
  }

  updateGame() {

  }
}

export default Game;