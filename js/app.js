const form = document.getElementById("form");
const email = document.getElementById("input-email");
let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

form.addEventListener("submit", (e) => {
  if (!email.value.match(emailPattern) || email.value === "") {
    e.preventDefault();
    email.nextElementSibling.classList.add("input-email__warning--visible");
    form.lastElementChild.classList.add("btn-submit--error-icon");
    email.focus();
  } else {
    email.nextElementSibling.classList.remove("input-email__warning--visible");
    form.lastElementChild.classList.remove("btn-submit--error-icon");
  }
});