$(function() {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-right.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-left.svg" alt=""></button>',
    });
});

    $('.tab').on('click', function(e) {

        e.preventDefault();

        $('.tab').removeClass('tab--active'); // При клике удаляем класс active
        $('.tabs__content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); //При клике по табу добавляем кдасс active
        $($(this).attr('href')).addClass('tabs-content--active'); // Добавляем атрибут табу и активируем соответствующую форму     

    });


    $('.product-item__favorite').on('click', function() {

        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 3,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-right-black.svg" alt=""></button>',
    });

    $('.filter-style').styler();

    $('.filter__item-drop,.filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $(".js-range-slider").ionRangeSlider({
        type:"double",
        grid:false,
        min:100000,
        max:500000,

    });

    $(".catalog__filter-btngrid").on("click", function() {
        $(this).addClass("catalog__filter-button--active");
        $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
        $(".product-item__wrapper").removeClass("product-item__wrapper--list");
    });

    $(".catalog__filter-btnline").on("click", function() {
        $(this).addClass("catalog__filter-button--active");
        $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
        $(".product-item__wrapper").addClass("product-item__wrapper--list");
    });

