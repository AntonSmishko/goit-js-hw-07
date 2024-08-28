const loginFormLink = document.querySelector('.login-form');

const submitHandler = event => {
   event.preventDefault();
   const { email, password } = event.target.elements;
   if (email.value === '' || password.value === '') {
      alert('All form fields must be filled in');
   }

   //    console.dir(event.target.elements.email.value);
   //    console.dir(event.target.elements.password.value);

   let inputInfo = {
      email: email.value,
      password: password.value,
   };
   console.log(inputInfo);

   event.target.reset();
};

loginFormLink.addEventListener('submit', submitHandler);
