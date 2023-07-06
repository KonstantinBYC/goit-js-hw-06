const listOfCategories = document.querySelectorAll(".item");

console.log(`Number of categories:`, listOfCategories.length);

listOfCategories.forEach((element) =>
  console.log(
    `Category:`,
    element.firstElementChild.textContent,
    `Elements:`,
    element.lastElementChild.children.length
  )
);
