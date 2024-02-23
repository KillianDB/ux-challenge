document.addEventListener("DOMContentLoaded", function () {
    const movingImage = document.getElementById("v1");
    const fadeInText = document.getElementById("sinopse");
    const stone = document.getElementById("stone_img");

    window.addEventListener("scroll", function () {
        const scrollPosition = window.scrollY;

        // Ajuste os valores de acordo com a sua necessidade
        if (scrollPosition > 200) {
            movingImage.style.opacity = "1";
            movingImage.style.transform = "scale(1)";
        }

        if (scrollPosition > 400) {
            fadeInText.style.opacity = "1";
            fadeInText.style.transform = "scale(1)";
        }

        if (scrollPosition > 800) {
            stone.style.opacity = "1";
            stone.style.transform = "scale(1)";
        }
    });
});
