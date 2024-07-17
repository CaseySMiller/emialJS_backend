const sumbitButton = document.getElementById('submit-button');

sumbitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputField = document.getElementById('email');
  const inputValue = inputField.value;
  console.log(inputValue);

  fetch('/api/sendmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: inputValue }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});

