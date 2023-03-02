const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');
console.log(navEl);

const element = ingredients.map(ingredient => {
  const listEl = document.createElement('li');

  listEl.textContent = ingredient;
  listEl.classList.add('item');

  return listEl;
});

navEl.append(...element);
