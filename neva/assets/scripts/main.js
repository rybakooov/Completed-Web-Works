$(document).ready(function () {
	$(".tool").click(function(){
		if($(this).attr("data-act") == '0'){
			$(this).parent().find(".tool-bef").css("display", "block");
			$(this).attr("data-act", "1");
		} else{
			$(this).parent().find(".tool-bef").css("display", "none");
			$(this).attr("data-act", "0");
		}
	});
	$(".tool-bef__img").click(function(){
		$(this).parent().css("display", "none");
		$(this).parent().parent().find(".tool").attr("data-act", "0");
	});

	$(document).ready(function (){
		$(document).on('click', '.big-slide__more', function(e){
		if ($('.big-slide__more').attr('data-open') == 0){
			$('.big-slide-more').animate().show();
			$('.big-slide__more').html('Скрыть');
			$('.big-slide__more').attr('data-open', '1');
			} else {
			$('.big-slide-more').animate().hide();
			$('.big-slide__more').html('Подробнее');
			$('.big-slide__more').attr('data-open', '0');
		}
	})});


	var lastSymbol;
	if($(window).height() > 450){
		$('path').hover(
			function(){
				lastSymbol = ($(this).attr("class")).charAt(4);
				$(".maparea__img" + lastSymbol).addClass("active__metr");
				$(".path" + lastSymbol).addClass("active__path");
			},
			function(){
				$(".maparea__img" + lastSymbol).removeClass("active__metr");
				$(".path" + lastSymbol).removeClass("active__path");
				
		});
		$('.maparea__img1').hover(
			function(){
				$(this).addClass("active__metr");
				$(".path1").addClass("active__path");
			},function(){});
			$('.maparea__img2').hover(
				function(){
				$(this).addClass("active__metr");
				$(".path2").addClass("active__path");
			},function(){});
			$('.maparea__img3').hover(
				function(){
				$(this).addClass("active__metr");
				$(".path3").addClass("active__path");
			},function(){});
			$('.maparea__img4').hover(
				function(){
				$(this).addClass("active__metr");
				$(".path4").addClass("active__path");
			},function(){});
		
	}


});


$(document).ready(function () {
	
	var sliderSections = $('.content-inn').slick({
		infinite: false,
    dots:true,
		arrows:false,
		draggable: false,
		swipe: false,
		focusOnSelect: true,
		vertical: true,
		responsive: [
			{
				breakpoint: 1025,
				settings: {
					draggable: true,
					swipe: true,
					vertical: false
				}
			}
		]
	});
	sliderSections.mousewheel(function(e) {
		e.preventDefault();
		if (e.deltaY < 0) {
			$(this).slick('slickNext');
		} else {
			$(this).slick('slickPrev');
		}
	});
	
	$(document).on('click', '.header-right__item', function(){
		if($(this).hasClass('slick-current')){

		} else {
			var slideno = $(this).data('slide');
			$('.content-inn').slick('slickGoTo', slideno);

		}
	});

	$(document).on('click', '.header-right__item', function(e){
		e.preventDefault();
	});
	if ($(window).width() < 1365) {
		$(".galery-slider").slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			dots: false,
			arrows: false, 
			responsive: [
				{
					breakpoint: 1025,
						settings: {
							slidesToShow: 3
						},
				},
				{
					breakpoint: 800,
						settings: {
							slidesToShow: 2.5
					},
				},
				{
					breakpoint: 650,
						settings: {
							slidesToShow: 2
					}
				},
				{
					breakpoint: 550,
						settings: {
							slidesToShow: 1.5
					}
				}
			]
		}); 
	}  
	$(window).resize(function(){
    var $windowWidth = $(window).width();
    if ($windowWidth < 1365) {
        $(".galery-slider").slick({
					infinite: true,
					slidesToShow: 2,
					slidesToScroll: 3,
					dots: false,
					arrows: false
				});   
    }
	});

	$(document).on('click', '.content-switcher__bar', function(e){
		$('.slick-current').removeClass('slick-current');
		$('a[data-slide=0]').addClass('slick-current');
		$(document).find('.content-inn').slick('unslick');
		$('.content-inn').slick({
			infinite: false,
			dots:true,
			arrows:false,
			draggable: false,
			swipe: false,
			focusOnSelect: true,
			vertical: true,
			responsive: [
				{
					breakpoint: 1025,
					settings: {
						draggable: true,
						swipe: true,
						vertical: false
					}
				}
			]
		});
		if($(this).hasClass('render')){
			$(this).removeClass('render');
			$(document).find('.content-inn.animation').attr('style', 'display: block');
			$(document).find('.content-inn.render').attr('style', 'display: none');
			$(document).find('.header').attr('style', 'visibility: unset');
			$(document).find('.header2').attr('style', 'visibility: hidden;');
			$(document).find('.content-inn.render').css("background-image", "url(assets/images/bg0.jpg)");
		} else {
			$(this).addClass('render');
			$(document).find('.content-inn.animation').attr('style', 'display: none');
			$(document).find('.content-inn.render').attr('style', 'display: block');
			$(document).find('.header').attr('style', 'visibility: hidden');
			$(document).find('.header2').attr('style', 'visibility: unset;');
			$(document).find('.content-inn.render').css("background-image", "url(assets/images/bg3.jpg)");
		}
	});

});

$(document).ready(function(){
	$('.header-right__item').click(function(){
		if($(document).width() < 1024){
			$('.header_up').toggleClass('header_up');
			$('.open').toggleClass('open');
		}
	});
});

$(document).ready(function() {
	var wrapperMenu = document.querySelector('.wrapper-menu');
	var sliderNumber = 0;	
	
	wrapperMenu.addEventListener('click', function(){
		wrapperMenu.classList.toggle('open');  
		$(".content-switcher").toggleClass("dispnone");
		if($(".header").hasClass("header_up")){
			if(sliderNumber == 1 || sliderNumber == 5 || sliderNumber == 6){
				$(".line-menu").css("background-color", "#008F39 !important");
			} else {
				$(".line-menu").css("background-color", "white")
			}
		} else {
			$(".line-menu").css("background-color", "#008F39");
		}
		$(".header").toggleClass("header_up");
	})
/*
	$('a[data-slick-index]').click(function(e) {
		e.preventDefault();
		var slideNum = $(this).data('slick-index');
		wrapperMenu.classList.toggle('open');  
		if($(".header").hasClass("header_up")){
			if(slideNum == 1 || slideNum == 5 || slideNum == 6){
				$(".line-menu").css("background-color", "#008F39");
			} else {
				$(".line-menu").css("background-color", "white")
			}
		} else {
			$(".line-menu").css("background-color", "#008F39");
		}
		if($(".header2").hasClass("header_up")){
			if(slideNum == 1 || slideNum == 5 || slideNum == 6){
				$(".line-menu").css("background-color", "#008F39");
			} else {
				$(".line-menu").css("background-color", "white")
			}
		} else {
			$(".line-menu").css("background-color", "#008F39");
		}
	});

*/


	var befSlide = 0;
	var kolSlide = 2;
/*
	$('a[data-slide]').click(function(e) {
		e.preventDefault();
		var slideno = $(this).data('slide');
		$('.content-inn').slick('slickGoTo', slideno - 1);
	});*/
	$('.content-inn.animation').on('afterChange', function(event, slick, currentSlide){
		sliderNumber = currentSlide;
		if(currentSlide == 3 && befSlide == 2){
			$(this).css("animation", "bg0 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg0 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg0 0.5s ease-in-out");
		}
		if(currentSlide == 2 && befSlide == 3){
			$(this).css("animation", "bg3 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg3 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg3 0.5s ease-in-out");
		}
		if(currentSlide == 4 && befSlide == 3){
			$(this).css("animation", "bg1 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg1 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg1 0.5s ease-in-out");
		}
		if(currentSlide == 3 && befSlide == 4){
			$(this).css("animation", "bg2 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg2 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg2 0.5s ease-in-out");
		}
		
		if($(".slick-current").hasClass("f5") && ($(window).width() > 769)){
			$(".svyaz").css("display", "none");
		}
		if($(".slick-active").not("f5")){
			$(".svyaz").css("display", "block");
		}
		if($(".slick-active").hasClass("f5") && ($(window).width() > 1200)){
			$(".svyaz").css("display", "none");
		}
		if((currentSlide != 4)  && ($(window).width() < 1025)){
			$(".scroll-mouse").css("display", "flex")
		}
		if(currentSlide == 1 || currentSlide == 5 || currentSlide == 6 ){
			$(".line-menu").css("background-color", "#008F39");
		} else{
			$(".line-menu").css("background-color", "white");
		}
		if(currentSlide >= 2 && currentSlide <= 4){
			$(this).css("background-image", "url(assets/images/bg" + (currentSlide - 2) + ".jpg)");
		}
		if($(window).width() < 1400) {
			if((currentSlide == 3) && ($(window).width() > 1024)){
				$(".svyaz").css("display", "none");
			}
		}
		$('.header-right').find('a').removeClass('slick-current').eq(currentSlide).addClass('slick-current');

	});
	$('.content-inn.render').on('afterChange', function(event, slick, currentSlide){
		sliderNumber = currentSlide;
		if(currentSlide == 3 && befSlide == 2){
			$(this).css("animation", "bg4 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg4 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg4 0.5s ease-in-out");
		}
		if(currentSlide == 4 && befSlide == 3){
			$(this).css("animation", "bg5 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg5 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg5 0.5s ease-in-out");
		}
		if(currentSlide == 3 && befSlide == 4){
			$(this).css("animation", "bg6 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg6 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg6 0.5s ease-in-out");
		}
		if(currentSlide == 2 && befSlide == 3){
			$(this).css("animation", "bg7 0.5s ease-in-out");
			$(this).css("-webkit-animation", "bg7 0.5s ease-in-out");
			$(this).css("-moz-animation", "bg7 0.5s ease-in-out");
		}
		
		if($(".slick-current").hasClass("f5") && ($(window).width() > 769)){
			$(".svyaz").css("display", "none");
		}
		if($(".slick-active").not("f5")){
			$(".svyaz").css("display", "block");
		}
		if($(".slick-active").hasClass("f5") && ($(window).width() > 1200)){
			$(".svyaz").css("display", "none");
		}
		if((currentSlide != 4)  && $(window).width() < 1025){
			$(".scroll-mouse").css("display", "flex")
		}
		if(currentSlide == 1 || currentSlide == 5 || currentSlide == 6){
			$(".header-left__bot").css("color", "green");
			$(".header-left__top").css("color", "green");
			$(".line-menu").css("background-color", "#008F39");
		} else{
			$(".header-left__bot").css("color", "white");
			$(".header-left__top").css("color", "white");
			$(".line-menu").css("background-color", "white");
		}
		if(currentSlide >= 2 && currentSlide <= 4){
			$(this).css("background-image", "url(assets/images/bg" + (currentSlide + 1) + ".jpg)");
		}
		if($(window).width() < 1400) {		
			$('.scroll-mouse').css("display", "flex").css("align-items","center").css("bottom","10px").css("right", "20px").css("height", "92px");
			$('.scroll-mouse a').css("margin-left", "40px");			
			$('.content-inn-item-content').css("bottom","100px").css("right", "20px");
			if((currentSlide == 3)){
				$(".svyaz").css("display", "none");
			}
		}
		$('.slick-current').removeClass('slick-current');
		$('a[data-slide=' + currentSlide + ']').addClass('slick-current');
	});
	$('.content-inn').on('beforeChange', function(event, slick, currentSlide){
		befSlide = currentSlide;
	});
	$('.svyaz').magnificPopup({
		type: 'inline',
		focus: '#na'
 	});
	 $('.gotoMap').magnificPopup({
		type: 'inline'
	 });
})
$(document).ready(function () {	
	if($(window).width() < 1400) {		
		$('.scroll-mouse').css("display", "flex").css("align-items","center").css("bottom","10px").css("right", "20px").css("height", "92px");
		$('.scroll-mouse a').css("margin-left", "40px");		
		$('.content-inn-item-content').css("bottom","100px").css("right", "20px");
		if((currentSlide == 3)){
			$(".svyaz").css("display", "none");
		}
	};
});
$(document).ready(function(){
	$(".wrapper").hide();
	$(".ie").hide();
});
$(window).on('load', function () {
	var ua = detect.parse(navigator.userAgent);
	if(ua.browser.family == 'IE'){
		$(".ie").show();
		$(".preload").hide();
	} else {
		$(".preload").fadeOut(1000);
		$(".preload").hide();
		$(".wrapper").show();
	}
});