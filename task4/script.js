const textLink = document.querySelector('#textLink');

textLink.addEventListener('click', () => {
    event.preventDefault ();
    const textChange = prompt('Введите текст, который отобразится на странице');
    textLink.textContent = textChange;
})