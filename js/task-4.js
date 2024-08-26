const loginFormLink = document.querySelector('.login-form');

const SubmitHandler = event => {
   console.log(event);
   event.preventDefault();
};

loginFormLink.addEventListener('submit', SubmitHandler);
