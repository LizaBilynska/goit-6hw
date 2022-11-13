const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
input.oninput = (e) => {
	text.style = "font-size:" + e.target.value + "px";
};