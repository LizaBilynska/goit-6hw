const numberofcategories = document.querySelectorAll("li.item");
console.log('Number of categories:', numberofcategories.length);

const category1 = numberofcategories[0].firstElementChild;
console.log('Category:', category1.textContent);

const listallels = category1.nextElementSibling;

const childOfList = listallels.children.length;
console.log('Elements:', childOfList);

const category2 = numberofcategories[1].firstElementChild;
console.log('Category:', category2.textContent);

const listallels2 = category2.nextElementSibling;

const childOfList2 = listallels2.children.length;
console.log('Elements:', childOfList2);

const category3 = numberofcategories[2].firstElementChild;
console.log('Category:', category3.textContent);

const listallels3 = category3.nextElementSibling;

const childOfList3 = listallels2.children.length;
console.log('Elements:', childOfList3);