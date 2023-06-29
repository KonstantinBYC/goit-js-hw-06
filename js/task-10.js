const controlsDivEl = document.querySelector("#controls");
const inputDivEl = controlsDivEl.firstElementChild;
const createBtnEl = inputDivEl.nextElementSibling;
const destroyBtnEl = controlsDivEl.lastElementChild;
const boxesDiv = document.querySelector("#boxes");

console.log(inputDivEl);

createBtnEl.addEventListener("click", createBoxes);
destroyBtnEl.addEventListener("click", destroyBoxes);
inputDivEl.addEventListener("change", onChangeValue);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = 0;
function onChangeValue(event) {
  amount = event.target.value;
}

function createBoxes(amount) {
  amount = inputDivEl.value;
  let newBoxesEl = document.createElement("div");
  let boxWidth = (newBoxesEl.style.width = "30px");
  let boxHeight = (newBoxesEl.style.height = "30px");
  const boxColor = (newBoxesEl.style.backgroundColor = getRandomHexColor());

  for (let i = 0; i < amount; i += 1) {
    newBoxesEl = document.createElement("div");
    newBoxesEl.style.width += "10px";
    newBoxesEl.style.height += "10px";
    boxColor = getRandomHexColor();
  }

  console.log(newBoxesEl);
  boxesDiv.append(newBoxesEl);
}

function destroyBoxes() {
  boxesDiv.remove();
  inputDivEl.reset();
}
