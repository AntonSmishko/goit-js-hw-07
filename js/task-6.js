function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}

const boxesEl = document.querySelector('#boxes');

function createBoxes(amount) {
   for (let i = 0; i <= amount; i += 1) {
      const divEl = document.createElement('div');
      divEl.style.width = 30;
      divEl.style.height = 30;
      divEl.style.backgroundColor = getRandomHexColor();
   }
}

function destroyBoxes() {}
