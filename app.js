const gameBoard = document.querySelector(".game-board");
const gameBoardFragment = document.createDocumentFragment();

const standardBtn = document.querySelector("#standardBtn");
const shadeBtn = document.querySelector("#shadeBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const clearBtn = document.querySelector("#clearBtn");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeSliderLabel = document.querySelector(".controls label");

const buttonList = [standardBtn, shadeBtn, rainbowBtn, eraseBtn];
let drawingType = "STANDARD";
let gridSize = 16;
let allTiles = [];

window.addEventListener("resize", () => {
  console.log(window.matchMedia("(max-width: 700px)"));
});

standardBtn.addEventListener("click", () => {
  setTileEventListners(allTiles, "STANDARD");
  setActiveBtn(standardBtn);
});
shadeBtn.addEventListener("click", () => {
  setTileEventListners(allTiles, "SHADE");
  setActiveBtn(shadeBtn);
});
rainbowBtn.addEventListener("click", () => {
  setTileEventListners(allTiles, "RAINBOW");
  setActiveBtn(rainbowBtn);
});
eraseBtn.addEventListener("click", () => {
  setTileEventListners(allTiles, "ERASE");
  setActiveBtn(eraseBtn);
});
clearBtn.addEventListener("click", () => {
  setGameBoard(gridSize);
});
gridSizeSlider.addEventListener("input", () => {
  gridSizeSliderLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;
});
gridSizeSlider.addEventListener("change", () => {
  setGameBoard(gridSizeSlider.value);
});

const setTileEventListners = (tileList, drawingType) => {
  tileList.forEach((tile) =>
    tile.addEventListener("mouseover", () => {
      setDrawingStyles(tile, drawingType);
    })
  );
};

const setDrawingStyles = (tile, drawingType) => {
  switch (drawingType) {
    case "STANDARD":
      tile.style.backgroundColor = "black";
      return;
    case "SHADE":
      const currentOpacity = getComputedStyle(tile).getPropertyValue("opacity");
      tile.style.backgroundColor = "white";
      tile.style.opacity = (+currentOpacity - 0.1).toString();
      return;
    case "RAINBOW":
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      tile.style.backgroundColor = "#" + randomColor;
      return;
    case "ERASE":
      tile.style.backgroundColor = "white";
      tile.style.opacity = "";
      return;
  }
};

const setActiveBtn = (activeBtn) => {
  buttonList.forEach((btn) => btn.classList.remove("active"));
  activeBtn.classList.add("active");
};

const setGameBoard = (gridSize) => {
  gameBoard.innerHTML = "";

  for (i = 0; i < gridSize * gridSize; i++) {
    const tile = document.createElement("div");
    tile.classList.add("tile");

    tile.style.width = 100 / gridSize + "%";
    tile.style.height = 100 / gridSize + "%";

    gameBoardFragment.appendChild(tile);
  }
  gameBoard.appendChild(gameBoardFragment);
  allTiles = Array.from(document.querySelectorAll(".tile"));
};

setGameBoard(gridSize);
setTileEventListners(allTiles, "STANDARD");
gridSizeSliderLabel.textContent = `${gridSizeSlider.value} X ${gridSizeSlider.value}`;
