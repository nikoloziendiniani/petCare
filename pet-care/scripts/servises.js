document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel-images");
    const nextBtn = document.getElementById("nextBtnk");
    const prevBtn = document.getElementById("prevBtnk");

    var current = 0
    const total = 6

    function getScrollValue() {
        const card = document.querySelector(".carousel-images .card");
        const gap = 20; // adjust based on margin
        return card.offsetWidth + gap;
    }
    function updateCarousel() {
        carousel.style.transform = `translateX(-${getScrollValue() * current}px)`;
    }

    nextBtn.addEventListener("click", () => {
        current++
        if (current > total - 1) {
            current = 0
        }
        updateCarousel()
    });

    prevBtn.addEventListener("click", () => {
        current = current - 1
        if (current <= 0) {
            current = total - 1
        }
        updateCarousel()
    });
});