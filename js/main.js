$(function () {
    $('.header--slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/next.svg" alt="next"></button>',
        vertical: true,
    });

    $('.product__name').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__contect',
        vertical: true,
        prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="next"></button>',       
    });
    $('.product__contect').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        vertical: true, 
        arrows: false,
    });


});