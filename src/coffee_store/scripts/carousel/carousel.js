import $ from 'jquery';


$(document).ready(function(){



    const width = $('.slider_container').width();
    //const width2 = $('.slider_container2').width();

    $('.slide').width(width);
    $('.slide2').width(width);
    $('.gallery_slider').width(width*$('.slide').length)
    $('.gallery_slider2').width(width*$('.slide2').length)

    $('.gallery_slider').css('left', -width);
    $('.gallery_slider2').css('left', -width);
    $('.gallery_slider>div:last-child').prependTo('.gallery_slider');
    $('.gallery_slider2>div:last-child').prependTo('.gallery_slider2');
    $('.slide').css('opacity', 0.5);
    $('.slide2').css('opacity', 0.5);
    $('.gallery_slider>div:nth-child(2)').css('opacity', 1);
    $('.gallery_slider2>div:nth-child(2)').css('opacity', 1);

    function nextSlide(){
        $('.gallery_slider').animate({
            'margin-left': -width
        }, 500, function(){
            $('.gallery_slider>div:first-child').appendTo('.gallery_slider');
            $('.gallery_slider').css('margin-left', 0);
            $('.slide').animate({'opacity': 0.5}, 100);
            $('.slide').css('opacity', 0.5);
            $('.gallery_slider>div:nth-child(2)').animate({'opacity': 1}, 100)
            $('.gallery_slider>div:nth-child(2)').css('opacity', 1)
        });
    }
    function nextSlide2(){
        $('.gallery_slider2').animate({
            'margin-left': -width
        }, 500, function(){
            $('.gallery_slider2>div:first-child').appendTo('.gallery_slider2');
            $('.gallery_slider2').css('margin-left', 0);
            $('.slide2').animate({'opacity': 0.5}, 100);
            $('.slide2').css('opacity', 0.5);
            $('.gallery_slider2>div:nth-child(2)').animate({'opacity': 1}, 100)
            $('.gallery_slider2>div:nth-child(2)').css('opacity', 1)
        });
    }
    $('.slider_handler').click(nextSlide);
    $('.slider2').click(nextSlide2);
})

