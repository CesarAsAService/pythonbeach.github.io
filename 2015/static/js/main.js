$(document).ready(function () {
	var mySwiper = new Swiper ('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		speed: 650,
		autoplay: 2000,
		effect: 'fade',
	});
});

$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: (target.offset().top - 70)
				}, 1000);
			return false;
			}
		}
	});
});

$(function() {
	var pull = $('#pull');
		menu  = $('nav ul');
		menuHeight  = menu.height();
 
	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});


// $(document).ready(function () {
// 	var header = document.querySelector("#header");
	 
// 	new Headroom(header, {
// 		tolerance: {
// 			down : 2,
// 			up : 5
// 		},
// 		offset : 100,
// 		classes: {
// 			initial: "slide",
// 			pinned: "slide--reset",
// 			unpinned: "slide--up"
// 		}
// 	}).init();
// });



function init_map(){var myOptions = {zoom:16,center:new google.maps.LatLng(-2.8996462955410185,-41.72429728487549),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(-2.8996462955410185, -41.72429728487549)});infowindow = new google.maps.InfoWindow({content:"<b>Faculdade Maur&iacute;cio de Nassau</b><br/>Avenida Leonardo de Carvalho<br/> Parna&iacute;ba - PI" });google.maps.event.addListener(marker, "click", function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);
