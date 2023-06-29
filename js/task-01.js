const listOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${listOfCategories.length}`);

listOfCategories.forEach((element) =>
  console.log(
    `Category: ${element.firstElementChild.textContent}`,
    `Elements: ${element.lastElementChild.children.length}`
  )
);

// const animals = document.querySelector("categories.firstChild.children");
// const products = document.querySelector("categories.secondChild.children");
// const technologies = document.querySelector("categories.thirdChild.children");

// console.log(`Category: ${categories.firstChild}`);
// console.log(`Elements: ${animals.length};`);
// console.log(`Category: ${categories.secondChild}`);
// console.log(`Elements: ${products.length};`);
// console.log(`Category: ${categories.thirdChild}`);
// console.log(`Elements: ${technologies.length};`);
