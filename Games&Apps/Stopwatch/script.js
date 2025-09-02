// TO DO:
// dark and light mode;
// or basic mode and night(brightening) mode

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
const watchFrameDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "watchFrame" }],
  null
);
const timeDisplayDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "timeDisplay" }],
  null
);
const lapHistoryDisplayDiv = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "lapHistoryDisplay" }],
  null
);

const minuteP = htmlElementGenerator(
  "p",
  [
    { attType: "id", attVal: "minute" },
    { attType: "class", attVal: "" },
  ],
  "12"
);

const secondP = htmlElementGenerator(
  "p",
  [
    { attType: "id", attVal: "second" },
    { attType: "class", attVal: "" },
  ],
  "46"
);

const millisecondP = htmlElementGenerator(
  "p",
  [
    { attType: "id", attVal: "millisecond" },
    { attType: "class", attVal: "" },
  ],
  "82"
);

const lapHistory1Div = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "lapHistory1" }],
  null
);
const lapHistory2Div = htmlElementGenerator(
  "div",
  [{ attType: "class", attVal: "lapHistory1" }],
  null
);

appElement.appendChild(frameDiv);
frameDiv.appendChild(watchFrameDiv);
watchFrameDiv.appendChild(timeDisplayDiv);
watchFrameDiv.appendChild(lapHistoryDisplayDiv);

timeDisplayDiv.appendChild(minuteP);
timeDisplayDiv.appendChild(secondP);
timeDisplayDiv.appendChild(millisecondP);

// lapHistoryDisplayDiv.appendChild(eachLapHistoryDiv);
// eachLapHistoryDiv.appendChild(minuteP);
// eachLapHistoryDiv.appendChild(secondP);
// eachLapHistoryDiv.appendChild(millisecondP);

lapHistoryDisplayDiv.appendChild(lapHistory1Div);
lapHistoryDisplayDiv.appendChild(lapHistory2Div);
// lapHistory1Div.appendChild(minuteP);
// lapHistory1Div.appendChild(secondP);
// lapHistory1Div.appendChild(millisecondP);
