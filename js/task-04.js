let counterValue = 0;
const buttons = document.querySelectorAll("button");
buttons[0].onclick = () => {
	counterValue -= 1; 
	document.querySelector("#value").innerHTML = counterValue;
};
buttons[1].onclick = () => {
	counterValue += 1; 
	document.querySelector("#value").innerHTML = counterValue;
};