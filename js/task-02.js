const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listOfIngr = document.querySelector("ul");

ingredients.forEach((element) => {
  const li = document.createElement("li");
  li.classList.add("item");
  li.textContent = element;
  listOfIngr.append(li);
});
