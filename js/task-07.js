const inputEl = document.querySelector("#font-size-control");
const valueEl = document.querySelector("#text");
inputEl.addEventListener("input", function () {
  valueEl.style.fontSize = inputEl.value + "px";
});
