import './gym.scss';
import $ from 'jquery';
import { slider } from './slider';
import './ymap.js';


$('.header_menu_btn').click(function () {
    $('.header_menu').toggleClass('activate_header_menu')
})



const gridItems = [{
    title: 'Единоборства',
    img: './assets/images/banner_img1.png',
    url: '#'
}, {
    title: 'Тяжелая атлетика',
    img: './assets/images/banner_img2.png',
    url: '#'
}, {
    title: 'Хоккей',
    img: './assets/images/banner_img3.png',
    url: '#'
}, {
    title: 'Плавание',
    img: './assets/images/banner_img4.png',
    url: '#'
}, {
    title: 'Кроссфит',
    img: './assets/images/banner_img5.png',
    url: '#'
}, {
    title: 'Кардио тренировки',
    img: './assets/images/banner_img6.png',
    url: '#'
}, {
    title: 'Кроссфит',
    img: './assets/images/banner_img5.png',
    url: '#'
}, {
    title: 'Тяжелая атлетика',
    img: './assets/images/banner_img4.png',
    url: '#'
}, {
    title: 'Кардио тренировки',
    img: './assets/images/banner_img3.png',
    url: '#'
}, {
    title: 'Хоккей',
    img: './assets/images/banner_img2.png',
    url: '#'
}, {
    title: 'Тяжелая атлетика',
    img: './assets/images/banner_img2.png',
    url: '#'
}, {
    title: 'Плавание',
    img: './assets/images/banner_img1.png',
    url: '#'
},
];

const grid = document.querySelector('.we_offer_wrapper');

function renderGrid(el) {
    const item = document.createElement('div');
    item.style.background = 'url(' + el.img + ')';
    item.style.backgroundSize = 'cover';
    item.classList.add('we_offer_item');
    const title = document.createElement('p');
    title.textContent = el.title;

    const link1 = document.createElement('a');
    link1.href = el.url;
    const button1 = document.createElement('div');
    button1.classList.add('button', 'grid_button', 'grid_get_started');
    button1.textContent = 'Начни уже сегодня';
    link1.appendChild(button1);

    const link2 = document.createElement('a');
    link2.href = el.url;
    const button2 = document.createElement('div');
    button2.classList.add('button', 'grid_button', 'grid_more');
    button2.textContent = 'Подробнее';
    link2.appendChild(button2);

    item.appendChild(title);
    item.appendChild(link1);
    item.appendChild(link2);
    grid.appendChild(item);
}

gridItems.forEach(el => {
    renderGrid(el);
});

/* 
$(document).ready(function(){
    const width = $('.slider_container').width();
    console.log(width);
    $('.gallery_slider').css('left', -width);
    $('.gallery_slider>img:last-child').prependTo('.gallery_slider');
    function nextSlide(){
        clearInterval(timer)
        $('.gallery_slider').animate({
            'margin-left': -width
        }, 500, function(){
            $('.gallery_slider>img:first-child').appendTo('.gallery_slider');
            $('.gallery_slider').css('margin-left', 0);
        });
        timer = setInterval(nextSlide, 3000)
    }
    function prevSlide(){
        clearInterval(timer);
        $('.gallery_slider').animate({
            'margin-left': width
        }, 500, function(){
            $('.gallery_slider>img:last-child').prependTo('.gallery_slider');
            $('.gallery_slider').css('margin-left', 0);
        });
        timer = setInterval(nextSlide, 3000)
    }
    let timer = setInterval(nextSlide, 3000)
    $('.next').click(nextSlide);
    $('.prev').click(prevSlide);
})

 */



function scroll() {
    const slider = document.querySelector('.gallery_slider');
    let width = slider.scrollWidth;
    console.log(width)

}

$(document).ready(scroll);