const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector ('#ingredients')
console.log(navEl);

ingredients.forEach((item) => {
  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = item;
  navEl.append(titleEl);
})


