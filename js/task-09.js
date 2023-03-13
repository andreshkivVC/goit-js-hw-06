function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refButton = document.querySelector('.change-color');
const refColor = document.querySelector('.color');

const changeColor = () => {
  refColor.textContent = document.body.style.backgroundColor =
    getRandomHexColor();
};

refButton.addEventListener('click', changeColor);