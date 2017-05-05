'use strict'
 $(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        arrows: false,
        infinite: true,
        dots: true,
        dotsClass: 'slider__dots'
    })
    $("#lightgallery").lightGallery();
});
// Слайдер "Artists"
    $('.img3-block1__artists--right-block1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.img3-block1__artists--bottom'
    });
    $('.img3-block1__artists--bottom').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.img3-block1__artists--right-block1',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        infinite: true,
        prevArrow: "<div class='artists__slider-prev'><i class='fa fa-chevron-circle-left' aria-hidden='true'></i></div>",
        nextArrow: "<div class='artists__slider-next'><i class='fa fa-chevron-circle-right' aria-hidden='true'></i></div>"
    });
