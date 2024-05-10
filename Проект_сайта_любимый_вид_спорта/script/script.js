// При загрузке документа
document.addEventListener("DOMContentLoaded", function() {
    // Находим все элементы h2 (заголовки секций)
    var sectionHeaders = document.querySelectorAll("h2");

    // Для каждого заголовка h2
    sectionHeaders.forEach(function(header) {
        // Добавляем обработчик события клика
        header.addEventListener("click", function() {
            // Находим родительский элемент секции
            var section = header.parentElement;

            // Находим все элементы в секции, кроме заголовка (h2)
            var sectionContent = section.querySelectorAll(":not(h2)");

            // Переключаем класс содержимого секции, чтобы свернуть или развернуть его
            sectionContent.forEach(function(content) {
                content.classList.toggle("hidden");
            });
        });

        // Свернуть содержимое секции при загрузке страницы
        header.click();
    });
});

// При загрузке документа
document.addEventListener("DOMContentLoaded", function() {
    // Получаем все элементы навигационного меню
    const navItems = document.querySelectorAll('nav ul li');

    // Применяем анимацию к пунктам навигационного меню
    navItems.forEach((item, index) => {
        item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
});

// При прокрутке страницы показываем или скрываем кнопку "наверх"
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // Если прокрутка больше 20 пикселей, отображаем кнопку
        document.getElementById("scroll-to-top-btn").style.display = "block";
    } else {
        // Иначе скрываем кнопку
        document.getElementById("scroll-to-top-btn").style.display = "none";
    }
};

// Плавная прокрутка страницы наверх при нажатии на кнопку
document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
    document.body.scrollTop = 0; // Для Safari
    document.documentElement.scrollTop = 0; // Для Chrome, Firefox, IE и Opera
});

// Отображение/скрытие дополнительной информации при нажатии на кнопку
document.getElementById('learn-more-btn').addEventListener('click', function() {
    var moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === 'none') {
        // Если дополнительная информация скрыта, отображаем её и меняем текст кнопки на "Скрыть"
        moreInfo.style.display = 'block';
        this.innerHTML = '&#9650; Скрыть'; // Стрелка вверх
    } else {
        // Иначе скрываем дополнительную информацию и меняем текст кнопки на "Узнать больше"
        moreInfo.style.display = 'none';
        this.innerHTML = '&#9660; Узнать больше'; // Стрелка вниз
    }
});
