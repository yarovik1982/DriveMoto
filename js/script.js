$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/arrow-right.svg" alt=""></button>',
    });

    $('.serch__tabs-item').on('click', function(e) {
    
        e.preventDefault();
    
        $('.serch__tabs-item').removeClass('serch__tabs-item--active');// При клике удаляем класс active
        $('.serch__content-item').removeClass('serch__content-item--active');

        $(this).addClass('serch__tabs-item--active');//При клике по табу добавляем кдасс active
        $($(this).attr('href')).addClass('serch__content-item--active');// Добавляем атрибут табу и активируем соответствующую форму
         
    });
});