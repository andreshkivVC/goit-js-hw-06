const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
console.log(itemEl);

itemEl.forEach(item => {
  const titleEl = item.firstElementChild.textContent;
  const itemsLength = item.lastElementChild.children.length;

  console.log('Category:', titleEl);
  console.log('Elements:', itemsLength);
});
