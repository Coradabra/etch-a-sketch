const gameBoard = document.querySelector(".game-board");
const gameBoardFragment = document.createDocumentFragment();

const standardBtn = document.querySelector("#standardBtn");
const shadeBtn = document.querySelector("#shadeBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const eraseBtn = document.querySelector("#eraseBtn");
const clearBtn = document.querySelector("#clearBtn");
const gridSizeSlider = document.querySelector("#gridSizeSlider");
const gridSizeSliderLabel = document.querySelector("#gridSizeSliderLabel");

const buttonList = [standardBtn, shadeBtn, rainbowBtn, eraseBtn];
let drawingType = "STANDARD";
let gridSize = 16;

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
gridSizeSlider.addEventListener("change", (event) => {
  const sliderValue = event.target.current.value;
  gridSizeSliderLabel.textContent = `${sliderValue} X ${sliderValue}`;
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
      tile.style.opacity = 1;
      return;
    case "SHADE":
      tile.style.backgroundColor = "white";
      const currentOpacity = getComputedStyle(tile).getPropertyValue("opacity");
      tile.style.opacity = (+currentOpacity - 0.1).toString();
      return;
    case "RAINBOW":
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      tile.style.backgroundColor = "#" + randomColor;
      tile.style.opacity = 1;
      return;
    case "ERASE":
      tile.style.backgroundColor = "white";
      tile.style.opacity = 1;
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
};

setGameBoard(gridSize);

const allTiles = Array.from(document.querySelectorAll(".tile"));

// Set Draw function
// Set up shade function
// Set up rainbow function
// Set up erase function
// Connect grid to slider
// Change Resetbtn to clear
// Format button styles
// Improve overall appearnace of the page
