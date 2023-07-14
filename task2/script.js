const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('Выводит сообщение в консоль')
});

const Alert = document.querySelector('#alert');
Alert.addEventListener('click', () => {
    alert('Выводит диалоговое окно с сообщением для пользователя')
});

const prompt = document.querySelector('#prompt');
prompt.addEventListener('click', () => {
    alert('Выводит диалоговое окно с запросом на ввод текста')
});