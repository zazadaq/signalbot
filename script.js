document.addEventListener("DOMContentLoaded", function() {
    const initialImageElement = document.getElementById("initialImage");
    const intermediateImageElement = document.getElementById("intermediateImage");
    const getRandomImageButton = document.getElementById("getRandomImage");

    const imageNames = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg"
    ];

    function getRandomImageName() {
        const randomIndex = Math.floor(Math.random() * imageNames.length);
        return imageNames[randomIndex];
    }

    function getRandomImageURL() {
        const imageName = getRandomImageName();
        return `image/${imageName}`;
    }

    function showLoadingAnimation() {
        getRandomImageButton.style.backgroundColor = "rgba(18, 114, 233, 0.6)"; // Затемнение кнопки при блокировке
    }

    function hideLoadingAnimation() {
        getRandomImageButton.style.backgroundColor = "rgba(18, 114, 233, 1)"; // Возвращение нормального цвета кнопки
    }

    getRandomImageButton.addEventListener("click", function() {
        initialImageElement.classList.add("hidden");
        intermediateImageElement.classList.remove("hidden"); // Показываем элемент
        getRandomImageButton.disabled = true; // Блокируем кнопку
        showLoadingAnimation(); // Показываем анимацию загрузки

        setTimeout(function() {
            const randomImageURL = getRandomImageURL();
            intermediateImageElement.src = "image/loading.gif"; // Показываем анимацию загрузки
            initialImageElement.src = randomImageURL;

            initialImageElement.classList.remove("hidden");
            intermediateImageElement.classList.add("hidden");
            getRandomImageButton.disabled = false; // Разблокируем кнопку
            hideLoadingAnimation(); // Убираем анимацию загрузки
        }, 2500);
    });
});
