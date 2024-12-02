// 1. Обработчик события click для заголовка H1
const header = document.getElementById("main-header");
header.addEventListener("click", () => {
    alert("Вы кликнули на заголовок - так держать!");
});
const header2 = document.querySelector("h1");

header.addEventListener("mouseover", () => {
    header.style.transition = "transform 0.3s ease";
    header.style.transform = "scale(1.2)"; // Увеличение заголовка на 20%
});

header.addEventListener("mouseout", () => {
    header.style.transition = "transform 0.3s ease";
    header.style.transform = "scale(1)"; // Возвращаем в исходный размер
});

const paragraph = document.querySelector("p");

paragraph.addEventListener("click", () => {
    paragraph.style.transition = "background-color 0.3s ease"; // Плавное изменение фона
    // Переключаем цвет фона
    if (paragraph.style.backgroundColor === "rgb(240, 240, 240)") {
        paragraph.style.backgroundColor = "";
    } else {
        paragraph.style.backgroundColor = "#f0f0f0"; // Цвет фона при клике
    }
});

// 2. Обработчик события для кнопки смены данных в таблице
const secondSemesterButton = document.getElementById("second-semester-btn");
secondSemesterButton.addEventListener("click", () => {
    const tableBody = document.querySelector("#practice-table tbody");
    const secondSemesterTopics = [
        "Базовое бэкенд-приложение",
        "HTTP-запросы",
        "JSON и работа с ним",
        "HTTP-ответы",
        "Проектирование API",
        "Роутинг и его настройка",
        "NoSQL базы данных",
        "Обеспечение авторизации и доступа пользователей",
        "Работа сторонних сервисов уведомления и авторизации",
        "Основы ReactJS",
        "Работа с компонентами динамической DOM",
        "Использование хуков в React",
        "Основы микросервисной архитектуры",
        "Разработка классических модулей веб-приложений"
    ];

    // Очищаем таблицу
    tableBody.innerHTML = "";

    // Добавляем новые строки
    secondSemesterTopics.forEach((topic, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${index + 1}</td><td>${topic}</td>`;
        tableBody.appendChild(row);
    });
});

// 3. Обработчики событий для фотографии студента
const studentPhoto = document.getElementById("student-photo");

// Увеличение фото при наведении
studentPhoto.addEventListener("mouseover", () => {
    studentPhoto.style.transform = "scale(1.1)";
});

// Восстановление размера фото при убирании мыши
studentPhoto.addEventListener("mouseout", () => {
    studentPhoto.style.transform = "scale(1)";
});

// Замена фото на клик
studentPhoto.addEventListener("click", () => {
    studentPhoto.src = "teacher.png"; 
    studentPhoto.alt = "Фотография преподавателя";
});

// Сообщение при двойном клике
studentPhoto.addEventListener("dblclick", () => {
    alert("Не налегай, у меня не так много любимых преподавателей!");
});

// Отладочные сообщения
console.log("Все обработчики событий успешно добавлены.");


document.addEventListener("DOMContentLoaded", () => {
    const studentPhoto = document.getElementById("student-photo");

    if (studentPhoto) {
        // Увеличение фото при наведении
        studentPhoto.addEventListener("mouseover", () => {
            studentPhoto.style.transform = "scale(1.1)";
        });

        // Восстановление размера фото при убирании мыши
        studentPhoto.addEventListener("mouseout", () => {
            studentPhoto.style.transform = "scale(1)";
        });

        // Замена фото на клик
        studentPhoto.addEventListener("click", () => {
            studentPhoto.src = "teacher.jpg"; // Замените на ссылку на фото преподавателя
            studentPhoto.alt = "Фотография преподавателя";
        });

        // Сообщение при двойном клике
        studentPhoto.addEventListener("dblclick", () => {
            alert("Не налегай, у меня не так много любимых преподавателей!");
        });
    } else {
        console.log("Элемент с id 'student-photo' не найден.");
    }

    console.log("Все обработчики событий успешно добавлены.");
});


