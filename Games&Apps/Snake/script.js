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
const head = { x: 18, y: 18 };
const tails = [
  { x: 17, y: 18 },
  { x: 18, y: 18 },
];

// let dir = "right"; // dir init value
let food = { x: 0, y: 0 };

// === Structures ==============

const boardElement = document.getElementById("board");
const tailsElement = document.getElementById("tails");
const foodElement = document.getElementById("food");

function init() {
  const boardWidth = board.width * unit;
  const boardHeight = board.height * unit;

  boardElement.style.width = `${boardWidth}px`;
  boardElement.style.height = `${boardHeight}px`;

  foodGenerator();
}

init();

function randomNumGenr(scale) {
  return Math.floor(Math.random() * scale);
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
  dir = newDir;
}

function stop() {}

function goRight() {
  head.x += 1; // increase by an unit
  if (head.x === board.width) head.x = 0;
}
// ⌃ add die result

function goLeft() {
  head.x -= 1;
  if (head.x < 0) head.x = board.width - 1;
}

function goDown() {
  head.y += 1;
  if (head.y === board.height) head.y = 0;
}

function goUp() {
  head.y -= 1;
  if (head.x < 0) head.y = board.height - 1;
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

let dir = "right"; // dir init value
// let isXAxis = true;

setInterval(() => {
  if (dir === "right") {
    goRight();
  } else if (dir === "left") {
    goLeft();
  } else if (dir === "down") {
    goDown();
  } else if (dir === "up") {
    goUp();
  }

  tails.push({ x: head.x, y: head.y });
  tails.shift();

  if (head.x === food.x && head.y === food.y) {
    tails.push({ x: head.x, y: head.y });
    foodGenerator();
  }

  render();
}, 150);

addEventListener("keydown", (event) => {
  if (event.key === "ArrayLeft") {
    changeDir("left");
  } else if (event.key === "ArrayUp") {
    changeDir("up");
  } else if (event.key === "ArrayDown") {
    changeDir("down");
  } else if (event.key === "ArrayRight") {
    changeDir("right");
    console.log("right");
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
