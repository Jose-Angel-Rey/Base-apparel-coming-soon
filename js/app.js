const form = document.querySelector(".email-form");
const email = document.querySelector("#input-email");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (email.value === " " || email.value.indexOf("@") === -1 || email.value == null) {
      email.nextElementSibling.classList.add("input-email__warning--visible");
	  email.focus()
	  form.lastElementChild.classList.add("btn-submit--error-icon")
    }
  });

  email.addEventListener("blur", (e) => {
	if(e.target.nextElementSibling.classList.contains("input-email__warning--visible")){
	e.target.nextElementSibling.classList.remove("input-email__warning--visible");
	form.lastElementChild.classList.remove("btn-submit--error-icon")
	}
  })