import * as Minesweeper from "../minesweeper";

class Board extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return <div>
      <li>{this.props.board.grid.map(row, i) (
        <div>
          {row[i].map(tile, j) (
            <Tile tile = {this.props.board[idx1][j]} updateTile = {this.updateGame()}/>
          )}
        </div>
      )}</li>

    </div>
  }

}



export default Board;