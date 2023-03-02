const itemEl = document.querySelectorAll('.item');
console.log('Number of categories:', itemEl.length);
console.log(itemEl);

itemEl.forEach(item => {
  const TitleEl = item.firstElementChild.textContent;
  const ItemsLength = item.lastElementChild.children.length;

  console.log('Category:', TitleEl);
  console.log('Elements:', ItemsLength);
});
