const gameBoard = document.querySelector(".game-board");
const gameBoardFragment = document.createDocumentFragment();

let gridSize = 16;

function setGameBoard() {
  for (i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.width = `${90 / gridSize}vw`;
    tile.style.height = `${90 / gridSize}vw`;

    tile.addEventListener(
      "mouseover",
      () => (tile.style.opacity = tile.style.opacity - 0.1)
    );
    gameBoardFragment.appendChild(tile);
  }
  gameBoard.appendChild(gameBoardFragment);
}

setGameBoard();
