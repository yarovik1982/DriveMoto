$(function() {
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-right.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-left.svg" alt=""></button>',
    });

    $('.tab').on('click', function(e) {

        e.preventDefault();

        $('.tab').removeClass('tab--active'); // При клике удаляем класс active
        $('.tabs__content').removeClass('tabs-content--active');

        $(this).addClass('tab--active'); //При клике по табу добавляем кдасс active
        $($(this).attr('href')).addClass('tabs-content--active'); // Добавляем атрибут табу и активируем соответствующую форму     "images/arrow-left-black.svg"

    });


    $('.product-item__favorite').on('click', function() {

        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/arrow-left-black.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/arrow-right-black.svg" alt=""></button>',
    });

    $('.filter-style').styler();

    $('.filter__item-drop').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });
});