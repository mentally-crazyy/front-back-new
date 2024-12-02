
/*document.addEventListener('DOMContentLoaded', function() {
    // Обработка таблиц посещаемости
    const tables = document.querySelectorAll('table');
    
    tables.forEach(table => {
        table.addEventListener('click', function(e) {
            if (e.target.classList.contains('attendance') || e.target.classList.contains('completion')) {
                e.target.textContent = e.target.textContent === '✓' ? '' : '✓';
            }
        });
    });

    // Инициализация Яндекс карты
    if (typeof ymaps !== 'undefined') {
        ymaps.ready(init);
        function init(){
            var myMap = new ymaps.Map("map", {
                center: [55.669984, 37.479318], 
                zoom: 15
            });
            
            var myPlacemark = new ymaps.Placemark([55.669984, 37.479318], {
                hintContent: 'РТУ МИРЭА',
                balloonContent: 'РТУ МИРЭА, проспект Вернадского, д. 78'
            });
            
            myMap.geoObjects.add(myPlacemark);
        }
    }
});
// Открытие модального окна с установкой типа услуги
function openModal(serviceType) {
    const modal = document.getElementById('modal');
    const serviceInput = document.getElementById('serviceType');
    modal.style.display = 'block'; // Отображаем модальное окно
    serviceInput.value = serviceType; // Устанавливаем выбранный тип услуги
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Скрываем модальное окно
}

// Закрытие модального окна при клике за его пределами
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = 'none'; // Скрываем, если кликнули вне окна
    }
}
// Phone number mask
document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? x[1] : '+' + x[1] + ' (' + x[2] + ') ' + x[3] + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
});

// Задание 1: Объявление переменных и условные операторы
const name = "Ваше имя";  
const age = 18;          

// Проверка возраста
if (age >= 18) {
    console.log("Вы совершеннолетний");
} else {
    console.log("Вы несовершеннолетний");
}

// Задание 2: Циклы
console.log("Числа от 1 до 10:");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("Числа от 10 до 1:");
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Задание 3: Работа с массивами
const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

// Добавляем новую тему и практику
lectures.push('Тема 4');
practices.push('Практика 4');

// Выводим все темы лекций и практик
console.log("Темы лекций:");
lectures.forEach((lecture) => console.log(lecture));

console.log("Практики:");
practices.forEach((practice) => console.log(practice));

// Функция для вывода массива элементов в строку через запятую
function printArray(arr) {
    console.log(arr.join(", "));
}

// Вывод массива лекций и практик
printArray(lectures);
printArray(practices);

// Задание 4: Манипуляции с массивами
function filterLecturesByLetterO(lectures) {
    return lectures.filter((lecture) => lecture.startsWith("О"));
}

// Пример массива тем лекций, в которых есть темы на "О"
const lecturesWithO = ['Обзор', 'Теория', 'Операции', 'Практика'];

// Вывод результата работы функции
console.log("Темы, начинающиеся с 'О':");
console.log(filterLecturesByLetterO(lecturesWithO));
*/
// Функция showMessage
function showMessage(message) {
    console.log(message);
}

// Функция changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    } else {
        console.warn(`Элемент с селектором "${selector}" не найден.`);
    }
}

// Функция для работы с utm_term
function handleUTMParameter() {
    const params = new URLSearchParams(window.location.search);
    const utmTerm = params.get('utm_term');
    const h1Element = document.querySelector('h1');
    if (h1Element && utmTerm) {
        h1Element.textContent = utmTerm;
    }
}

// Вызов функции showMessage
showMessage("Скрипт загружен!");

// Функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const timeString = now.toTimeString().split(' ')[0];
    console.log(`Текущее время: ${timeString}`);
}

// Вызов logCurrentTime
logCurrentTime();

// Обработчик события DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    // Функция resetBackgroundColor
    function resetBackgroundColor() {
        document.body.style.backgroundColor = "white";
    }

    // Сброс цвета фона перед установкой нового
    resetBackgroundColor();

    // Вызов changeBackgroundColor
    changeBackgroundColor("lightblue");

    // Вызов toggleVisibility
    toggleVisibility(".content");

    // Обработка utm_term
    handleUTMParameter();
});
function changeBackgroundColor(color) {
    document.body.style.setProperty("background-color", color, "important");
}

document.addEventListener("DOMContentLoaded", () => {
    changeBackgroundColor("lightblue");
});
