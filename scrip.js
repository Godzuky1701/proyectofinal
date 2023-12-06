document.addEventListener("DOMContentLoaded", function () {
    const imageCarousel = document.querySelectorAll('.image-carousel');
    
    imageCarousel.forEach(carousel => {
        const images = carousel.querySelectorAll('img');
        let currentImageIndex = 0;

        const showImage = (index) => {
            images.forEach((image, i) => {
                image.style.opacity = i === index ? '1' : '0';
            });
        };

        carousel.querySelector('.prev-button').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(currentImageIndex);
        });

        carousel.querySelector('.next-button').addEventListener('click', () => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            showImage(currentImageIndex);
        });

        showImage(currentImageIndex);
    });
});