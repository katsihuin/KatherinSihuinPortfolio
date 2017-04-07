$(document).on('ready', init);

var loader = $(".loader");

function init() {
	$("window").on('load', onLoad);
	//$('.js-nav').on('click', onClickBurger);
	onGreetings();
}

function onLoad(){
	loader.style.display = 'none';
}

function onGreetings(){
	setTimeout( function() {
		$('.welcome').removeClass('disguised');
	}, 500);

	onScroll();
}

function onScroll(){

$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

		$('.greeting').css({
		'transform' : 'translate(0px, '+ wScroll /2 +'%)'
		});

		$('.back-sun').css({
		'transform' : 'translate(0px, '+ wScroll /4 +'%)'
		});

		$('.fore-pier').css({
		'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
		});

		if(wScroll > $('.portfolio-pics').offset().top - ($(window).height() / 1.2)) {

		    $('.portfolio-pics figure').each(function(i){

				setTimeout(function(){
					$('.portfolio-pics figure').eq(i).addClass('is-showing');
				}, 150 * (i+1));
		    });

		}
	});

}

//function onClickBurger(){
  	//$(this).parent().find('.menu').toggleClass('active');
//}