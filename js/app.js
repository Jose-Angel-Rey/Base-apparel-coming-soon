const form = querySelector(".email-form")
const email = querySelector("#input-email")

form,addEventListener("submit", (e) =>{
	e.preventDefault()
	
	if (email.value === " "  || email.value.indexOf("@") == -1 || email.value == null){
	console.log("Funcionando")
	email.nextElementSibling.classList.add("input-email__warning--visible")
	}
})
