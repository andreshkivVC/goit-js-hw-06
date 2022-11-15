function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  widgetEl: document.querySelector('.widget'),
  changeColor: document.querySelector('.color'),
  changeColorBtn: document.querySelector('.change-color'),
};

refs.changeColorBtn.addEventListener('click', onBtnChangeColorName);

function onBtnChangeColorName(event) {
  refs.changeColor.textContent = getRandomHexColor ();
  console.log(getRandomHexColor);

  let color = getRandomHexColor();

}

// let color = getRandomHexColor();

