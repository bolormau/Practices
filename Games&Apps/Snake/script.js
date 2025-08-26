// ==============================================
// =================== SNAKE ====================
// ==============================================

// To do: ------------------------------
// score
// winner
// rotate or die when chundul to frame
// buttons

// fix food generator - if food generated in body pos, ...
// change buttons
// fix food pos
// is board generation needed??
// stop function
// change died style
// sometimes snake body = 1
// body
// high score
//

// === Config ===============
const unit = 20;
const board = { height: 35, width: 35 }; // object

let head = { x: 0, y: 0 };
let food = { x: 0, y: 0 };
let tails = [
  { x: 0, y: 0 },
  { x: 0, y: 0 },
];
let dir = "";
let hightScore = 0; // use local storage
let score = 0;
let dirRequest = "";

// === Structures ==============
const boardElement = document.getElementById("board");
const tailsElement = document.getElementById("tails");
const foodElement = document.getElementById("food");
const scoreElement = document.getElementById("score-text");

// button elements
const restartElement = document.getElementById("restart-button");

function init() {
  boardGenerator();
  snakeGenerator();
  foodGenerator();
  dirGenerator();
}
init();

function randomNumGenr(scale) {
  return Math.floor(Math.random() * scale);
}

function boardGenerator() {
  const boardWidth = board.width * unit;
  const boardHeight = board.height * unit;
  boardElement.style.width = `${boardWidth}px`;
  boardElement.style.height = `${boardHeight}px`;
}

function snakeGenerator() {
  head = {
    x: randomNumGenr(board.width - 10) + 5,
    y: randomNumGenr(board.height - 10) + 5,
  };

  tails = [
    { x: head.x - 1, y: head.y },
    { x: head.x, y: head.y },
  ];
}

function dirGenerator() {
  dirNum = randomNumGenr(4);
  if (dirNum === 1) dirRequest = "right";
  else if (dirNum === 2) dirRequest = "left";
  else if (dirNum === 3) dirRequest = "up";
  else if (dirNum === 4) dirRequest = "down";
}

function foodGenerator() {
  food = {
    x: randomNumGenr(board.width),
    y: randomNumGenr(board.height),
  };

  const isFoodUnderTheBody = tails.some(
    (tail) => tail.x === food.x && tail.y === food.y
  );

  if (isFoodUnderTheBody) foodGenerator();

  foodElement.style.width = `${unit}px`;
  foodElement.style.height = `${unit}px`;

  foodElement.style.left = `${food.x * unit}px`;
  foodElement.style.top = `${food.y * unit}px`;
}

function changeDir(newDir) {
  if (dir === "up" || dir === "down") {
    if (newDir === "left" || newDir === "right") dirRequest = newDir;
  } else {
    if (newDir === "up" || newDir === "down") dirRequest = newDir;
  }

  // if (!isXAxis) dir = newDir;
}

let isXAxis = true;

function goRight() {
  head.x += 1;
  isXAxis = true;
}

function goLeft() {
  head.x -= 1;
  isXAxis = true;
}

function goDown() {
  head.y += 1;
  isXAxis = false;
}

function goUp() {
  head.y -= 1;
  isXAxis = false;
}

function render() {
  const tailsHTML = tails
    .map(
      (tail) =>
        `<div 
          style="
            width: ${unit}px;
            height: ${unit}px;
            left: ${tail.x * unit}px;
            top: ${tail.y * unit}px;" 
          class="tails">
        </div>`
    )
    .join("");

  tailsElement.innerHTML = tailsHTML;
}

function stop() {
  dir = null;
  tailsElement.style.backgroundColor = `brown`;
}

function gameLoop() {
  dir = dirRequest;

  if (dir === "right") {
    goRight();
  } else if (dir === "left") {
    goLeft();
  } else if (dir === "down") {
    goDown();
  } else if (dir === "up") {
    goUp();
  } else if (dir === null) return;
}

setInterval(() => {
  gameLoop();

  if (
    (0 <= head.x &&
      head.x < board.width &&
      0 <= head.y &&
      head.y < board.height) ||
    !tails.some((tail) => tail.x === tail.x && tail.y == tail.y)
  ) {
    tails.push({ x: head.x, y: head.y });
    tails.shift();
  } else if (tails.some((tail) => tail.x === tail.x && tail.y == tail.y)) {
    // init();
    stop();
  }

  if (head.x === food.x && head.y === food.y) {
    tails.push({ x: head.x, y: head.y });
    foodGenerator();
    score++;
    scoreElement.textContent = score;
  }

  render();
}, 80);

addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    changeDir("left");
  } else if (event.key == "ArrowUp") {
    changeDir("up");
  } else if (event.key == "ArrowDown") {
    changeDir("down");
  } else if (event.key == "ArrowRight") {
    changeDir("right");
  }
});

// ==========================
// let dir; //
// let axis; // x, y

// let dirChanger = (dir) => {

// }

// addEventListener("press", (pressed) => {
//   if(pressed.key === "ArrowDown")
// })

// Go Function
// function go(dir, isYAxis) {
//   if(isYAxis) {
//     if(dir === right) { turn right; dir = right; isYAxis = !isYAxis; //false }
//     else if(dir === left) { turn left; dir = left; isYAxis = !isYAxis; }
//   }
//   else {
//     if(dir === up) { turn up; dir = up; isYAxis = !isYAxis; //true }
//     else if(dir === down) { turn right; dir = down; isYAxis = !isYAxis; }
//   }
// }
