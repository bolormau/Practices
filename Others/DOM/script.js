const newArrivalsProducts = [
  {
    img: "images/p1.jpg",
    brand: "Altuzarra",
    name: "Dak Coat",
    price: 2.795,
  },
  {
    img: "images/p2.jpg",
    brand: "Annoushka",
    name: "Diamond Bracelet",
    price: "2.0million",
  },
  {
    img: "images/p3.jpg",
    brand: "Giuseppe Zanotti",
    name: "Janiee Stretch 90",
    price: 995,
  },
  {
    img: "images/p4.jpg",
    brand: "Altuzarra",
    name: "Origami Bag Mini",
    price: 495,
  },
  {
    img: "images/p5.jpg",
    brand: "Larroudé",
    name: "Larroudé X Libertine Boot",
    price: 508,
  },
  // {
  //   img: "images/p6.jpg",
  //   brand: "Altuzarra",
  //   name: "Drawstring Clutch",
  //   price: 795,
  // },
];

const preLovedProducts = [
  {
    img: "images/p1.jpg",
    brand: "Altuzarra",
    name: "Dak Coat",
    price: 2.795,
  },
  {
    img: "images/p2.jpg",
    brand: "Annoushka",
    name: "Diamond Bracelet",
    price: 2.0,
  },
  {
    img: "images/p3.jpg",
    brand: "Giuseppe Zanotti",
    name: "Janiee Stretch 90",
    price: 995,
  },
  {
    img: "images/p4.jpg",
    brand: "Altuzarra",
    name: "Origami Bag Mini",
    price: 495,
  },
  {
    img: "images/p5.jpg",
    brand: "Larroudé",
    name: "Larroudé X Libertine Boot",
    price: 508,
  },
  // {
  //   img: "images/p6.jpg",
  //   brand: "Altuzarra",
  //   name: "Drawstring Clutch",
  //   price: 795,
  // },
];

const categories1 = [
  {
    title: "New Arrival",
    cards: "newArrivalProducts",
    // link: "shopNow",
    // overflow: "rightArrow",
  },
  {
    title: "Discover pre-loved sale",
    cards: "preLovedProducts",
    // link: null,
    // overflow: null,
  },
  {
    title: "New Arrival",
    cards: "newArrivalProducts",
    // link: "shopNow",
    // overflow: "rightArrow",
  },
  {
    title: "Discover pre-loved sale",
    cards: "preLovedProducts",
    // link: null,
    // overflow: null,
  },
];

// --------------------------------------------
const appElement = document.getElementById("app");

// HEADER RENDER
const header = document.createElement("header");
header.setAttribute("class", "header");

const navBarNav = document.createElement("nav");
navBarNav.setAttribute("class", "navBar");

const pageTitleH1 = document.createElement("h1");
pageTitleH1.setAttribute("class", "pageTitle");
pageTitleH1.innerText = "luxury stores";

const menus = document.createElement("menus");
menus.setAttribute("class", "menus");
menus.innerText = `menu menu menu`;

navBarNav.appendChild(pageTitleH1);
header.appendChild(navBarNav);
header.appendChild(menus);

appElement.appendChild(header);

// CARDS
function renderCards(products) {
  const cardsFrame = document.createElement("div");
  cardsFrame.setAttribute("class", "cardsFrame");

  const cards = document.createElement("div");
  cards.setAttribute("class", "cards");

  // for looper:
  for (const product of products) {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");

    const pImage = document.createElement("img");
    pImage.setAttribute("class", "img");
    pImage.src = product.img;

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");

    const pBrand = document.createElement("p");
    pBrand.setAttribute("class", "brand");
    pBrand.innerText = product.brand;

    const pName = document.createElement("p");
    pName.setAttribute("class", "name");
    pName.innerText = product.name;

    const pPrice = document.createElement("p");
    pPrice.setAttribute("class", "price");
    pPrice.innerText = "$" + product.price;

    imgContainer.appendChild(pImage);
    desc.appendChild(pBrand);
    desc.appendChild(pName);
    desc.appendChild(pPrice);
    card.appendChild(imgContainer);
    card.appendChild(desc);
    cards.appendChild(card);
    // cardsFrame.appendChild(cards);
  }
  return cards;
}

const cards1 = renderCards(newArrivalsProducts);
const cards2 = renderCards(preLovedProducts);

// appElement.appendChild(renderCards(newArrivalsProducts));
// appElement.appendChild(renderCards(preLovedProducts));

// CATEGORIES
function renderCategories(categories) {
  const categoriesDiv = document.createElement("div");
  categoriesDiv.setAttribute("class", "categories");

  for (const category of categories) {
    const categoryDiv = document.createElement("div");
    categoryDiv.setAttribute("class", "category");

    const categoryTitleH2 = document.createElement("h2");
    categoryTitleH2.setAttribute("class", "categoryTitle");
    categoryTitleH2.innerText = category.title;

    const cardsFrameDiv = document.createElement("div");
    cardsFrameDiv.setAttribute("class", "cardsFrame");

    // if(category.overflow !== null) {
    //   const overflowButton = document.createElement("button");
    //   overflowButton.setAttribute("class", "overflowButton");
    //   // ...
    // }

    // if(category.link !== null) {
    //   const linkButton = document.createElement("button");
    //   linkButton.setAttribute("class", "linkButton");
    // }

    categoryDiv.appendChild(categoryTitleH2);
    // cardsContainerDiv.appendChild(cards);
    cardsFrameDiv.appendChild(cards1);
    categoryDiv.appendChild(cardsFrameDiv);
    categoriesDiv.appendChild(categoryDiv);
  }
  return categoriesDiv;
}

const categories = renderCategories(categories1);
appElement.appendChild(categories);

// appElement.appendChild(menus);
// appElement.appendChild(categories);

// function defaultGenerator() {
//   for (let i = 0; i < products.length - 1; i++) {
//     for (const card of cards) {
//       card.setAttribute("id", `card ${i + 1}`);
//     }
//   }
// }

// function cardMaker(i) {
//   for (const card of cards) {
//     card.setAttribute("id", `card ${i + 1}`);
//   }
// }

// defaultGenerator();
