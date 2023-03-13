const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email.length === 0 || password.length === 0) {
    alert('заповніть всі поля будь-ласка');
    console.log('заповніть всі поля будь-ласка');
    return;
  }

  const fromData = {
    email,
    password,
  };

  console.log(fromData);

  form.reset();
}
