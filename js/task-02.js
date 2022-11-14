const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

let elements = [];
for (let i = 0; i < ingredients.length; i++) {
	const element = document.createElement("li");
	element.innerHTML = ingredients[i];
	element.className = "item";
	elements[i] = element;
}

const igredients = document.getElementById("ingredients");
igredients.append(...elements)