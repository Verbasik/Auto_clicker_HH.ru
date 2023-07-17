// Функция, которая возвращает Promise, разрешающийся через указанное количество миллисекунд
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Функция, которая выполняет все действия для одной вакансии
async function handleVacancy(button) {
    // Нажимаем на кнопку "Откликнуться"
    button.click();
    await delay(2000);

    // Нажимаем на кнопку "Приложить сопроводительное письмо"
    var letterButton = document.querySelector('button[data-qa="vacancy-response-letter-toggle"]');
    letterButton.click();
    await delay(2000);

    // Вставляем текст из буфера обмена в поле для ввода письма
    var letterField = document.querySelector('textarea[name="text"]');
    letterField.value = 'Тут вставляем сопроводительно письмо';  // Замените эту строку на содержимое вашего буфера обмена
    await delay(2000);

    // Нажимаем на кнопку "Отправить"
    var sendButton = document.querySelector('button[data-qa="vacancy-response-letter-submit"]');
    sendButton.click();
    await delay(2000);
}

// Главная функция, которая обрабатывает все вакансии
async function main() {
    var responseButtons = document.querySelectorAll('a[data-qa="vacancy-serp__vacancy_response"]');
    for (var i = 0; i < responseButtons.length; i++) {
        await handleVacancy(responseButtons[i]);
    }
}

main();