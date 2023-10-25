const gameBoard = document.querySelector(".game-board");
const gameBoardFragment = document.createDocumentFragment();
const resetBtn = document.querySelector(".controls button");

window.addEventListener("resize", () => {
  console.log(window.matchMedia("(max-width: 700px)"));
});

resetBtn.addEventListener("click", () => {
  const gridSize = +prompt("What size grid would you like? (1-100)");

  if (!gridSize || gridSize > 100 || gridSize < 1) {
    alert("Invalid value entered. Please select a number between 1 and 100.");
    return;
  }

  setGameBoard(gridSize);
});

function setGameBoard(gridSize = 16) {
  gameBoard.innerHTML = "";

  for (i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    tile.style.width = 100 / gridSize + "%";
    tile.style.height = 100 / gridSize + "%";

    tile.addEventListener("mouseover", () => {
      const currentOpacity = getComputedStyle(tile).getPropertyValue("opacity");
      tile.style.opacity = (+currentOpacity - 0.1).toString();
    });
    gameBoardFragment.appendChild(tile);
  }
  gameBoard.appendChild(gameBoardFragment);
}

setGameBoard();
