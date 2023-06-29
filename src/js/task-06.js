const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInput);

function onInput(evt) {
  if (evt.currentTarget.value.length === Number(inputEl.dataset.length)) {
    console.log(evt.currenttarget.value.length);
    console.log(Number(inputEl.dataset.length));
    console.log(
      Number(inputEl.dataset.length) === evt.currentTarget.value.length
    );
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    this.classList.remove("valid");
    this.classList.add("invalid");
    alert("Невірна кількість символів");
  }
}
