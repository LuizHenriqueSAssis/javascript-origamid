const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");

console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linksInternos = document.querySelector('[href^="#"]');

console.log(linksInternos);

const animaisImg = document.querySelectorAll(".animais img");

console.log(animaisImg[2]);

const gridSectionHTML = document.getElementsByClassName("grid-Section");

const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

primeiraUl.classList.add("grid-section");

gridSectionNode.forEach(function (item, index) {
  console.log(index);
});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
