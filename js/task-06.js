const input = document.getElementById("validation-input");
const dataLength = +input.dataset.length;
input.onblur = () => {
	if (dataLength === input.value.length) {
		input.className = "valid";
	}
	else {
		input.className = "invalid";
	}
};