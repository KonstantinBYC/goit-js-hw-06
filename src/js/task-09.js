const changeColorBtn = document.querySelector(`.change-color`);
const txtName = document.querySelector(`.color`);

changeColorBtn.addEventListener("click", getNewBodyColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getNewBodyColor() {
  const colorEl = getRandomHexColor();
  bodyEl.style.backgroundColor = "colorEl";
  txtName.textContent = colorEl;
}
