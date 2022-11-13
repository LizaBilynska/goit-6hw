document.querySelector("input#name-input").onkeyup = (value) => {
	const output = document.querySelector("#name-output");
	if (!value.target.value) {
		output.innerHTML = "Anonymous";
		return;
	}
	output.innerHTML = value.target.value;
};