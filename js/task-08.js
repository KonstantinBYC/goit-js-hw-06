const formSet = document.querySelector(`.login-form`);

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  const formElement = event.currentTarget.elements;
  const mail = formElement.email.value;
  const password = formElement.password.value;
  const message = "Всі поля мають бути заповнені";

  if (mail === "" || password === "") {
    event.preventDefault();
    alert(message);
  } else {
    const formData = { mail, password };
    console.log(formData);
    form.reset();
  }
}
