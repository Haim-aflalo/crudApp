const inputForm = document.getElementById('input_data');
inputForm.addEventListener('submit', (event) => {
  event.preventDefault();
  fetch('http://localhost:5000/hello')
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    });
});
