const allProducts = [
  {
    img: "images/nike1.avif",
    feature: "just in",
    name: "Nike shox TL fade",
    category: "women's shoes",
    color: 6,
    price: 180,
  },
  {
    img: "images/nike2.avif",
    feature: null,
    name: "Nike zoom vomero 5",
    category: "women's shoes",
    color: 9,
    price: 170,
  },
  {
    img: "images/nike3.avif",
    feature: "just in",
    name: "Nike total 90",
    category: "women's shoes",
    color: 2,
    price: 115,
  },
  {
    img: "images/nike4.avif",
    feature: null,
    name: "Nike air superfly",
    category: "women's shoes",
    color: 4,
    price: 105,
  },
  {
    img: "images/nike5.avif",
    feature: null,
    name: "Nike v5 RNR",
    category: "women's shoes",
    color: 11,
    price: 95,
  },
  {
    img: "images/nike6.avif",
    feature: "sustainable materials",
    name: "Nike ava rover",
    category: "men's shoes",
    color: 5,
    price: 145,
  },
  {
    img: "images/nike7.avif",
    feature: "just in",
    name: "nike gato",
    category: "men's shoes",
    color: 13,
    price: 115,
  },
  {
    img: "images/nike8.avif",
    feature: null,
    name: "nike calm realTree",
    category: "men's shoes",
    color: 5,
    price: 70,
  },
  {
    img: "images/nike9.avif",
    feature: "just in",
    name: `nike panthom 6 low elite "erling haaland"`,
    category: "men's shoes",
    color: 2,
    price: 270,
  },
  {
    img: "images/nike10.avif",
    feature: "launching",
    name: "nike total 90",
    category: "men's shoes",
    color: 1,
    price: 115,
  },
];

const appElement = document.getElementById("app");

// Nav Bar
const navBarNav = document.createElement("nav");
const logoImg = document.createElement("img");
logoImg.setAttribute("class", "logoImg");
logoImg.setAttribute("src", "images/nike-logo");
const themeButton = document.createElement("button");

// Main page
const mainDiv = document.createElement("div");

// Side Bar for filter
const sideBarDiv = document.createElement("div");
const categoryContainerDiv = document.createElement("div");
const categoryTitleDiv = document.createElement("div");
const categoryListDiv = document.createElement("div");
// Button render function
const categoryButton = document.createElement("button");

// Product List 
const pCardsContainerDiv = document.createElement("div");
const pCardsDiv = document.createElement("div");
// Card render function
const pCardDiv = document.createElement("div");
const pFeatureP = document.createElement("p");
const pNameP = document.createElement("p");
const pCategoryP = document.createElement("p");
const pColorP = document.createElement("p");
const pPriceP = document.createElement("p");