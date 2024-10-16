let currentSlide = 0;
const slides = document.querySelectorAll('.slide');


function showSlide(index) {
    const totalSlides = slides.length;
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelector('.slides').style.transform = 'translateX(' + (-currentSlide * 105) + '%)';
}


function nextSlide() {
    showSlide(currentSlide + 1);
}


function prevSlide() {
    showSlide(currentSlide - 1);
}


showSlide(currentSlide);
