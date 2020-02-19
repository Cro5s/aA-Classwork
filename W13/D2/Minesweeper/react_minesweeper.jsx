import Minesweeper from "./minesweeper";
import Game from "./components/game";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<Game/>, root);
});