const appElement = document.getElementById("app");

function htmlElementGenerator(e, atts, inner, styles) {
  const element = document.createElement(e);
  if(atts !== null) {
    for (const att of atts) {
    element.setAttribute(att.attType, att.attVal);
  }
  }
  if (inner !== null) {
    element.innerText = inner;
  }
  if (styles !== null) {
    for (const eachStyle of styles) {
      element.style[eachStyle.styleType] = eachStyle.styleVal;
    }
  }
  return element;
}

appElement.style.display = "flex";
appElement.style.flexDirection = "column";
appElement.style.gap = "10px";
appElement.style.justifyContent = "center";
appElement.style.alignItems = "center";
appElement.style.display = "flex";

// Rendering an element using one element datas
const pDesc = htmlElementGenerator(
  "p",
  [
    { attType: "class", attVal: "desc" },
    { attType: "id", attVal: "desc1" },
  ],
  "Description content",
  null
);

console.log(pDesc);
// appElement.append(pDesc);

// Rendering multiple elements using multiple element datas
const elementsDatas = [
  {
    eType: "h3",
    att: [
      { attType: "class", attVal: "title" },
      { attType: "id", attVal: "title1" },
    ],
    inner: "My home country",
    styles: null,
  },
  {
    eType: "div",
    att: [
      { attType: "class", attVal: "content" },
      { attType: "id", attVal: "content1" },
    ],
    inner: "Beautiful And Peaceful",
    styles: 
    [
      { styleType: "backgroundColor", styleVal: "pink"}
    ],
  },
  {
    eType: "img",
    att: [
      { attType: "class", attVal: "img" },
      { attType: "src", attVal: "randomPicture.jpg" },
    ],
    inner: "i'm a <img>",
    styles: [
      { styleType: "width", styleVal: "300px" },
      { styleType: "height", styleVal: "auto" },
      { styleType: "borderRadius", styleVal: "10%"},
      { styleType: "display", styleVal: "block"},
    ],
  },
  {
    eType: "a",
    att: [
      { attType: "class", attVal: "link" },
      {
        attType: "href",
        attVal:
          "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.countryliving.com%2Fuk%2Fwildlife%2Fcountryside%2Fa35191740%2Fmoving-to-countryside-advice%2F&psig=AOvVaw0DPjkykdOfzM4nRcrpsKn6&ust=1756433715908000&source=images&cd=vfe&opi=89978449&ved=0CBgQjhxqFwoTCMih7NK3rI8DFQAAAAAdAAAAABAE",
      },
    ],
    inner: "Visit Here",
    styles: null,
  },
];

for (const elementData of elementsDatas) {
  const element = htmlElementGenerator(
    elementData.eType,
    elementData.att,
    elementData.inner,
    elementData.styles
  );
  console.log(element);
  appElement.appendChild(element);
}
