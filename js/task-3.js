const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const evtInput = event => {
   console.log(event.target.value);
   nameOutput.textContent = event.target.value;
};

nameInput.addEventListener('input', evtInput);
console.log(nameOutput);
