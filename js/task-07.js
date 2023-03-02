const inputEl = document.querySelector('#font-size-control');
const fontText = document.querySelector('#text');

inputEl.addEventListener('input', event => {
  fontText.style.fontSize = event.currentTarget.value + 'px';
});
