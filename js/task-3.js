const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const evtInput = event => {
   nameOutput.textContent = event.target.value;
   const inputValue = event.target.value.trim();
   if (inputValue === '') {
      nameOutput.textContent = 'Anonymous';
   }
};

nameInput.addEventListener('input', evtInput);
