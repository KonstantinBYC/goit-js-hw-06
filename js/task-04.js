const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector("button[data-action='decrement']");
const incrementBtn = document.querySelector("button[data-action='increment']");

let value = 0;
incrementBtn.addEventListener("click", function () {
  value += 1;
  counterValue.textContent = value;
  counterValue.style.color = "green";
});
decrementBtn.addEventListener("click", function () {
  value -= 1;
  counterValue.textContent = value;
  counterValue.style.color = "red";
});
