// ==============================================
// =================== SNAKE ====================
// ==============================================

// To do: ------------------------------
// score
// winner
// rotate or die when chundul to frame
// buttons

// set interval
// random
// f to switch direction
// input to take direction
// dir === y -> left(), right(); dir = x
// dir === x -> up(), down(); dir = y
// make wall scalable (with breaks)
// always save rotated position
// event listener
// 35sqr - h

// fix food generator - if food generated in body pos, ...

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
  if (dirNum === 1) dir = "right";
  else if (dirNum === 2) dir = "left";
  else if (dirNum === 3) dir = "up";
  else if (dirNum === 4) dir = "down";
}

function foodGenerator() {
  food = {
    x: randomNumGenr(board.width),
    y: randomNumGenr(board.height),
  };

  foodElement.style.width = `${unit}px`;
  foodElement.style.height = `${unit}px`;

  foodElement.style.left = `${food.x * unit}px`;
  foodElement.style.top = `${food.y * unit}px`;
}

function changeDir(newDir) {
  if (dir === "up" || dir === "down") {
    if (newDir === "left" || newDir === "right") dir = newDir;
  } else {
    if (newDir === "up" || newDir === "down") dir = newDir;
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

setInterval(() => {
  if (dir === "right") {
    goRight();
  } else if (dir === "left") {
    goLeft();
  } else if (dir === "down") {
    goDown();
  } else if (dir === "up") {
    goUp();
  } else if (dir === null) return;

  if (
    0 <= head.x &&
    head.x < board.width &&
    0 <= head.y &&
    head.y < board.height
  ) {
    tails.push({ x: head.x, y: head.y });
    tails.shift();
  } else {
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
}, 100);

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
