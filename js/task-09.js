function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refButton = document.querySelector('.change-color');
const refColor = document.querySelector('.color');

refButton.addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
  refColor.textContent = getRandomHexColor();
});
