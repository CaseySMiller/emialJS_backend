const sumbitButton = document.getElementById('submit-button');

sumbitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputField = document.getElementById('email');
  const inputValue = inputField.value;
  inputField.value = '';

  fetch('/api/sendmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: inputValue }),
  })
    .then(() => {
      console.log('Email sent');
      window.location.href = '/success.html';
    })
    .catch((error) => {
      console.error('Error: Something went wrong', error);
    });
});

