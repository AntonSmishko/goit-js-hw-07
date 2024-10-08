function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector(' .color');
const changeColor = event => {
   const colorToSet = getRandomHexColor();
   document.body.style.backgroundColor = colorToSet;
   spanColor.textContent = colorToSet;
};
btnChangeColor.addEventListener('click', changeColor);
