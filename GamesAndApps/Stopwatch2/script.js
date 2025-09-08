// HTML Element Generation

// Element Generator Function
function htmlElementGenerator(tagName, atts, innerText) {
  const element = document.createElement(tagName);
  if (atts !== null) {
    for (const att of atts) {
      element.setAttribute(att.attType, att.attVal);
    }
  }
  if (innerText !== null) {
    element.innerText = innerText;
  }
  return element;
}

// Elements
const appElement = document.getElementById("app");

const frameDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "frame" }],
  null
);

const timeDisplay = htmlElementGenerator("div", [ { attType: "class", attVal: "timeDisplay"}, ], null);
const 
const resetButtonDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "resetButton" }],
  null
);
const startButtonDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "startButton" }],
  null
);

appElement.appendChild(frameDiv);
appElement.appendChild(resetButtonDiv);
appElement.appendChild(startButtonDiv);