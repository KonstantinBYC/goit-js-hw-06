const controlsDivEl = document.querySelector("#controls");
const inputDivEl = controlsDivEl.firstElementChild;
const createBtnEl = inputDivEl.nextElementSibling;
const destroyBtnEl = controlsDivEl.lastElementChild;
const boxesDiv = document.querySelector("#boxes");

createBtnEl.addEventListener("change", onCreateBtnClick);
destroyBtnEl.addEventListener("click", onDestroyClick);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onCreateBtnClick(event) {
  let amount = 0;
  amount = event.target.value;
}

function createBoxes(amount) {
  let sizes = 30;
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const newBoxesEl = document.createElement("div");
    newBoxesEl.style.width = "${sizes}px";
    newBoxesEl.style.height = "${sizes}px";
    boxColor = getRandomHexColor();
    elements.push(newBoxesEl);
    sizes += 10;
  }
  console.log(newBoxesEl);
  boxesDiv.append(...elements);
}

function onDestroyClick() {
  boxesDiv.innerHTML();
}
