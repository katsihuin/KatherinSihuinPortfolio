$(document).on('ready', init);

var loader = $(".loader");

function init() {
	$("window").on('load', onLoad);
	onGreetings();
}

function onLoad(){
	loader.style.display = 'none';
}

function onGreetings(){
	setTimeout( function() {
		$('.welcome').removeClass('disguised');
	}, 500);
}
