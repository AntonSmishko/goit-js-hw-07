function getRandomHexColor() {
   return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
}
const inputEl = document.querySelector('#controls > input');
const boxesEl = document.querySelector('#boxes');
const btnCreateEl = document.querySelector('[data-create]');
const btnDesEl = document.querySelector('[data-destroy]');

btnCreateEl.addEventListener('click', () => createBoxes(Number(inputEl.value)));
btnDesEl.addEventListener('click', destroyBoxes);

function destroyBoxes(evt) {
   boxesEl.innerHTML = '';
   inputEl.value = '';
}

function createBoxes(amount) {
   boxesEl.innerHTML = '';

   let divElSize = 30;
   for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement('div');
      divEl.style.width = `${divElSize}px`;
      divEl.style.height = `${divElSize}px`;
      divEl.style.backgroundColor = getRandomHexColor();
      boxesEl.append(divEl);
      divElSize += 10;
   }
}
