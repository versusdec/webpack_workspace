$(function () {
	
	$('#offers-partners button').click(function () {
		$(this).closest('.block').addClass('more');
	});
	
	
	$('.help-buy').click(function () {
		$(".help-phone").addClass('show');
		if ($(document).outerWidth() <= 950) {
			$(".time-box > div").addClass('show');
		}
		return false;
	});
	
	setTimeout(function () {
		$('.block-1').attr('data-visible', 1);
	});
	
	$(".help-phone i").click(function () {
		$(".help-phone,.time-box > div").removeClass('show');
	});
	
	$('header li a[href*=\\#]').on('click', function (event) {
		var el = $(this.hash);
		if (el.length) {
			$('html,body').animate({scrollTop: el.offset().top - 60}, 500);
		}
	});
	
	var header = $("#header");
	var classLogo = "logo";
	var bg_h = $('.parallax img').height();
	var doc_h = $(document).height();
	$(window).scroll(function () {
		var top = $(window).scrollTop();
		if (top > 100 && !header.hasClass(classLogo)) {
			//header.addClass(classLogo);
		} else if (top === 0 && header.hasClass(classLogo)) {
			//header.removeClass(classLogo);
		}
		$('.parallax').css({"top": - Math.round(bg_h*top/(doc_h - bg_h + 180 + $(window.top).height()))});
		//console.log();
	});
	
	$("header")
		.on('click', '.burger-img', function () {
			$("header").toggleClass('menu');
		})
		.on('click', 'a', function () {
			$("header").removeClass('menu');
		});
	
	var mc = $('.media-carousel');
	var mcb = $('.media-carousel-button');
	
	function setMCNum(event) {
		var num = mc.find('.owl-item.active .item-video').attr('data-num');
		mcb.find('.text').html(num + " / " + event.item.count);
	}
	
	mc.owlCarousel({
		stagePadding: 500,
		items: 1,
		merge: false,
		loop: true,
		margin: 140,
		video: true,
		lazyLoad: true,
		center: true,
		dots: false,
		responsive: {
			300: {
				stagePadding: 0,
				margin: 0
			},
			768: {
				stagePadding: 0,
				margin: 0
			},
			1024: {
				stagePadding: 0,
				margin: 400
			},
			1200: {
				stagePadding: 300
			},
			1440: {
				stagePadding: 300
			},
			1500: {
				stagePadding: 500
			}
		},
		onInitialized: function (e) {
			var el = mc.find('.owl-item.active');
			var left = el.offset().left;
			var width = el.width();
			var mr = parseInt(el.css("margin-right"));
			
			mcb.offset({left: left + width + (mr / 2) - 20});
			
			setMCNum(e)
		},
		onTranslated: setMCNum
	});
	mcb.on('click', '.next', function () {
		mc.trigger('next.owl.carousel');
	});
	mcb.on('click', '.prev', function () {
		mc.trigger('prev.owl.carousel');
	});
	
	
	var ac = $('.about-carousel');
	var acb = $('.about-carousel-button');
	
	
	function setACNum(event) {
		var num = ac.find('.owl-item.active .item-about').attr('data-num');
		acb.find('.text').html(num + " / " + event.item.count);
	}
	
	ac.owlCarousel({
		items: 1,
		merge: false,
		loop: true,
		margin: 0,
		dots: false,
		animateOut: 'fadeOut',
		responsive: {
			100: {
				margin: 0
			},
			400: {
				margin: 20
			}
		},
		onInitialized: function (e) {
			setACNum(e)
		},
		onTranslated: setACNum
	});
	acb.on('click', '.next', function () {
		ac.trigger('next.owl.carousel');
	});
	acb.on('click', '.prev', function () {
		ac.trigger('prev.owl.carousel');
	});
	
	
	var cc = $('.cast-carousel');
	cc.addClass('owl-carousel owl-theme');
	var ccb = $('.cast-carousel-button');
	
	
	function setCCNum(event) {
		var num = cc.find('.owl-item.active > div').attr('data-num');
		ccb.find('.text').html(num + " / " + event.item.count);
	}
	
	cc.owlCarousel({
		//stagePadding: 50,
		items: 1,
		merge: false,
		loop: true,
		margin: 20,
		dots: false,
		animateOut: false,
		responsive: {
			100: {
				nestedItemSelector: 'item'
			},
			700: {
				margin: 20,
				items: 2,
				nestedItemSelector: 'item'
			},
			1100: {
				nestedItemSelector: false,
				margin: 0
			}
		},
		onInitialized: function (e) {
			setCCNum(e)
		},
		onTranslated: setCCNum
	});
	ccb.on('click', '.next', function () {
		cc.trigger('next.owl.carousel');
	});
	ccb.on('click', '.prev', function () {
		cc.trigger('prev.owl.carousel');
	});
	
	if ($(document).outerWidth() <= 600) {
		var opc = $('.offers-partners-carousel');
		opc.addClass('owl-carousel owl-theme');
		var opcb = $('.offers-partners-carousel-button');
		
		
		function setOPNum(event) {
			var num = opc.find('.owl-item.active .col').attr('data-num');
			opcb.find('.text').html(num + " / " + event.item.count);
		}
		
		opc.owlCarousel({
			stagePadding: 70,
			items: 1,
			merge: false,
			center: false,
			loop: true,
			margin: 20,
			dots: false,
			nav: false,
			responsive: {
				100: {
					margin: 10,
					stagePadding: 10
				},
				400: {
					margin: 20
				}
			},
			onInitialized: function (e) {
				setOPNum(e)
			},
			onTranslated: setOPNum
		});
		opcb.on('click', '.next', function () {
			opc.trigger('next.owl.carousel');
		});
		opcb.on('click', '.prev', function () {
			opc.trigger('prev.owl.carousel');
		});
	}
	
	
	var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	//if (!isSafari) {
	particlesJS('body', {
		"particles": {
			"number": {
				"value": 5,
				"density": {
					"enable": 0
				}
			},
			"shape": {
				"type": "image",
				"image": {
					"src": "/img/bg/1.png",
					"width": 15,
					"height": 15
				}
			},
			"opacity": {
				"value": 0.5,
				"random": 0,
				"anim": {
					"enable": 0,
					"speed": 0.2,
					"opacity_min": 0,
					"sync": 0
				}
			},
			"size": {
				"value": 50,
				"random": 1,
				"anim": {
					"enable": 0
				}
			},
			"line_linked": {
				"enable": 0
			},
			"move": {
				"enable": 1,
				"speed": 3,
				"direction": "none",
				"random": 1,
				"straight": 0,
				"out_mode": "out"
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": 0
				},
				"onclick": {
					"enable": 0
				},
				"resize": 0
			}
		},
		"retina_detect": 0
	});
	
	var can = $(".particles-js-canvas-el");
	can.height($(window).height());
	
	setTimeout(function () {
		can.height($(window).height())
	}, 5000);
	//}
	
	
	var rc = $('.reviews-carousel');
	var rcb = $('.reviews-carousel-button');
	
	
	function setRwNum(event) {
		var num = rc.find('.owl-item.active .review').attr('data-num');
		rcb.find('.text').html(num + " / " + event.item.count);
	}
	
	rc.owlCarousel({
		stagePadding: 500,
		items: 1,
		merge: false,
		loop: true,
		margin: 140,
		lazyLoad: true,
		center: true,
		dots: false,
		responsive: {
			300: {
				stagePadding: 0,
				margin: 0
			},
			768: {
				stagePadding: 0,
				margin: 0
			},
			1024: {
				stagePadding: 0,
				margin: 400
			},
			1200: {
				stagePadding: 300
			},
			1440: {
				stagePadding: 300
			},
			1500: {
				stagePadding: 500
			}
		},
		onInitialized: function (e) {
			var el = rc.find('.owl-item.active');
			var left = el.offset().left;
			var width = el.width();
			var mr = parseInt(el.css("margin-right"));
			
			rcb.offset({left: left + width + (mr / 2) - 20});
			
			
			setRwNum(e)
		},
		onTranslated: setRwNum
	});
	rcb.on('click', '.next', function () {
		rc.trigger('next.owl.carousel');
	});
	rcb.on('click', '.prev', function () {
		rc.trigger('prev.owl.carousel');
	});
	
	
	//////
	var smic = $('.smi-carousel');
	var smicb = $('.smi-carousel-button');
	
	
	smic.owlCarousel({
		stagePadding: 0,
		items: 1,
		merge: false,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		margin: 30,
		lazyLoad: false,
		center: false,
		dots: true
	});
	smicb.on('click', '.next', function () {
		smic.trigger('next.owl.carousel');
	});
	smicb.on('click', '.prev', function () {
		smic.trigger('prev.owl.carousel');
	});
});
