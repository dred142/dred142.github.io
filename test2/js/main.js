$(document).ready(function(){
 $('#nav-menu').click(function(){
        $('ul.nav-list').addClass('nav-open').slideToggle('300');
    });
	
	var videoPlayer = document.getElementById('videoPlayer');
    videoPlayer.volume = 0.5;
    $('#overlay').on('click', function () {
		$('#overlay').slideToggle('400');
		$('#videoPlayer').attr('controls', 'controls');
        if (videoPlayer.paused == false) {
            videoPlayer.pause();
            videoPlayer.firstChild.nodeValue = 'Play';
        } else {
            videoPlayer.play();
            videoPlayer.firstChild.nodeValue = 'Pause';
        }
    });
//Слайдер партнёров
$('#carouselhAuto').jsCarousel({
onthumbnailclick: function(src) { /* alert(src);*/  },  //функция при нажатии на картинку
autoscroll: true,   //вкл/выкл автопрокрутку
itemstodisplay: 7,  //сколько слайдов отображать
scrollspeed: 1500,  //время эффекта прокрутки
delay: 3000,        //время прокрутки слайдов
orientation: 'h',   //горизонтальная h или вертикальная v карусель
circular: true
});
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1500);
    return false;
});
});
