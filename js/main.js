'use strict';

$(window).on('load', function() {
	/*------------------
		Preloder
	--------------------*/
	$(".loader").fadeOut();
	$("#preloder").delay(400).fadeOut("slow");

});

(function($) {
	/*------------------
		Navigation
	--------------------*/
	$(".main-menu").slicknav({
        appendTo: '.header-section',
        allowParentLinks: true
	});
	if ($(window).width() > 992) {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 120) {
				$('#navbar_top').addClass('fixed-top');
				// add padding top to show content behind navbar
				$('body').css('padding-top', $('.navbar').outerHeight() + 'px');
			} else {
				$('#navbar_top').removeClass('fixed-top');
				// remove padding top from body
				$('body').css('padding-top', '0');
			}
			if ($(this).scrollTop() > 1000) {
				$('#site-footer').css('position', 'fixed');
				$('#site-footer').css('left', '0');
				$('#site-footer').css('right', '0');
				$('#site-footer').css('bottom', '0');
			}
			else
			{
				$('#site-footer').css('left', '');
				$('#site-footer').css('right', '');
				$('#site-footer').css('bottom', '');
				$('#site-footer').css('position', '');
			}
		});
	}

	/*------------------
		Background Set
	--------------------*/
	$('.set-bg').each(function() {
		var bg = $(this).data('setbg');
		$(this).css('background-image', 'url(' + bg + ')');
	});
	
	/*------------------
		Hero Slider
	--------------------*/
	var $slider = $('.hero-slider');
	var SLIDER_TIMEOUT = 5000;

	$slider.owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		autoplay: true,
		autoplayTimeout: SLIDER_TIMEOUT,
		animateOut: 'fadeOut',
   		animateIn: 'fadeIn',
		loop: true,
		onInitialized: ({target}) => {
			var animationStyle = '-webkit-animation-duration'+ SLIDER_TIMEOUT +'ms;animation-duration:'+ SLIDER_TIMEOUT+'ms';
			var progressBar = $('<div class="slider-progress-bar"><span class="progress" style='+ animationStyle +'></span></div>');
			$(target).append(progressBar);
		},
		onChanged: ({type, target}) => {
			if (type === 'changed') {
				var $progressBar = $(target).find('.slider-progress-bar');
				var clonedProgressBar = $progressBar.clone(true);

				$progressBar.remove();
				$(target).append(clonedProgressBar);
			}
		}
	});

	/*------------------
		Video Popup
	--------------------*/
	$('.video-play').magnificPopup({
		type: 'iframe'
	});

	/*------------------
		Testimonials
	--------------------*/
	$('.testimonial-slider').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoplay: true,
		loop: true,
		autoplayHoverPause: true,
		animateOut: 'slideOutDown',
   		animateIn: 'slideInDown',
	});

	/*------------------
		Circle progress
	--------------------*/
	$('.circle-progress').each(function() {
		var cpvalue = $(this).data("cpvalue");
		var cpcolor = $(this).data("cpcolor");
		var cpid 	= $(this).data("cpid");

		$(this).append('<div class="'+ cpid +'"></div><div class="progress-value"><h3>'+ cpvalue +'%</h3></div>');

		if (cpvalue < 100) {

			$('.' + cpid).circleProgress({
				value: '0.' + cpvalue,
				size: 80,
				thickness: 4,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		} else {
			$('.' + cpid).circleProgress({
				value: 1,
				size: 80,
				thickness: 4,
				fill: cpcolor,
				emptyFill: "rgba(0, 0, 0, 0)"
			});
		}
	});

	$(document).ready(function() {
	
		// INITIATE THE FOOTER
	  siteFooter();
		// COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
		$(window).resize(function() {
			siteFooter();
		});
		
		function siteFooter() {
			var siteContent = $('#site-content');
			var siteContentHeight = siteContent.height();
			var siteContentWidth = siteContent.width();
	
			var siteFooter = $('#site-footer');
			var siteFooterHeight = siteFooter.height();
			var siteFooterWidth = siteFooter.width();
	
			console.log('Content Height = ' + siteContentHeight + 'px');
			console.log('Content Width = ' + siteContentWidth + 'px');
			console.log('Footer Height = ' + siteFooterHeight + 'px');
			console.log('Footer Width = ' + siteFooterWidth + 'px');
	
			siteContent.css({
				"margin-bottom" : siteFooterHeight
			});
		};
	});
	
})(jQuery);
