//Форма обратной связи
jQuery(document).ready(function($) {
    // Добавляем маску для поля с номера телефона
    $('#phone').mask('+380(99)999-99-99');
	$('#phones').mask('+380(99)999-99-99');

    // Отправляет данные из формы на сервер и получает ответ
    $('#contactForm').on('submit', function(event) {
        
        event.preventDefault();

        var form = $('#contactForm'),
            button = $('#button'),
            answer = $('#answer'),
            loader = $('#loader');

        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: form.serialize(),
            beforeSend: function() {
                answer.empty();
                button.attr('disabled', true).css('margin-bottom', '20px');
                loader.fadeIn();
            },
            success: function(result) {
                loader.fadeOut(300, function() {
                    answer.text(result);
                });
                form.find('.form-control').val(' ');
                button.attr('disabled', false);
            },
            error: function() {
                loader.fadeOut(300, function() {
                    answer.text('Произошла ошибка! Попробуйте позже.');
                });
                button.attr('disabled', false);
            }
        });
    });
	 
});
//Анимация меню
$(document).ready(function(){
    $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('nav-open').slideToggle('300');
    });
});
//Cлайдер страницы отзывов
 var swiper = new Swiper('.swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: -50,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows : false,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
//Функция скрытия PopUp
$('#widjet__close-btn').click( function() {
		$(".widjet__body").animate({
			width: 0,
			height: 0,
			padding: 0
		}, 1000);
		$('.widjet').hide(1000);
});
