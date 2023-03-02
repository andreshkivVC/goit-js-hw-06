const inputEl = document.querySelector('#validation-input');
const namberSymbol = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', event => {
  if (event.currentTarget.value.length === namberSymbol) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});
