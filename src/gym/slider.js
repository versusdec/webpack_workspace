import $ from 'jquery'

const target = document.querySelector('.slider_wrapper');
const slides = document.querySelectorAll('.slide');
let timer = null;
var slideIndex = 0;

slides.forEach(function (slide, i) {
    const target = document.querySelector('.slider_dots')
    let dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', function () {
        currentSlide(i);
    })
    target.appendChild(dot);
})
let dots = document.querySelectorAll('.dot');
showSlides();
function currentSlide(n) {
    clearTimeout(timer);
    timer = null;
    showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove('dot_active');
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add('dot_active');
    timer = setTimeout(showSlides, 4000)
}
