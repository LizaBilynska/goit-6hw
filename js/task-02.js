// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

const makeIngredientsList = options => {
  return options.map(option => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = option;

    return liEl;
  }

  )
}