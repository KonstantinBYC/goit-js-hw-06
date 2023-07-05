const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput(evt) {
  if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {
    console.log(evt.currenttarget.value.length);
    console.log(Number(inputEl.dataset.length));
    console.log(
      Number(inputEl.dataset.length) === evt.currentTarget.value.length
    );

    this.classList.add("valid");
  } else {
    this.classList.add("invalid");
    alert("Невірна кількість символів");
  }
}

inputEl.addEventListener("change", (evt) => {
  evt.preventDefault();
  console.log(inputEl.value);
  input.reset();
  onInput.textContent = "";
});
