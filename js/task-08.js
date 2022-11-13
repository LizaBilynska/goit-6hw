const form = document.querySelector("form");
form.onsubmit = (event) => {
	if (!form.elements.email.value) {
		alert("Email shouldn't be empty! Please fill all fields.");
		event.preventDefault();
	}
	else if (!form.elements.password.value) {
		alert("Password shouldn't be empty! Please fill all fields.");
		event.preventDefault();
	}
	else {
		event.preventDefault();
		
		let result = {};
		for (let i = 0; i < form.elements.length; i++) {
			if (!form.elements[i].name) { 
				continue;
			}
			result[form.elements[i].name] = form.elements[i].value;
		}
		console.log(result);
		
		form.reset();
	}
};
