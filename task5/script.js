let textForm = document.querySelector('#textForm');

textForm.addEventListener('keyup', (event) => {
    let duplicateField= document.querySelector('#duplicateField');
    duplicateField.textContent = event.target.value;
});

let button = document.querySelector('button');

button.addEventListener('click', (event) => {
    console.log(textForm.value);
    textForm.value = '';
    duplicateField.textContent = event.target.value;
});