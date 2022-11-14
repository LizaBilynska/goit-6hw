function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.getElementsByClassName("change-color")[0].onclick = () => {
	const color = this.getRandomHexColor();
	document.getElementsByClassName("color")[0].innerHTML = color;
	document.body.style.backgroundColor = color;
};