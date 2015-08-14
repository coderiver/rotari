head.ready(function() {

	$('.js-menu').hover(function(){
		$(this).find('.js-menu-drop').slideToggle();
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		dots: false,
		centerMode: false,
		focusOnSelect: true
	});

	$(function() {
		$.datepicker.setDefaults(
			$.extend($.datepicker.regional["ru"])
		);
		$("#datepicker").datepicker();
	});

});