(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch mode.
		if (browser.mobile)
			$body.addClass('is-touch');

	// Dropdowns.
		$('#nav > ul').dropotron({
			alignment: ($body.hasClass('landing') ? 'center' : 'right'),
			hideDelay: 400
		});

	// Off-Canvas Navigation.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Navigation Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

	// Carousel.
		$('.carousel').each(function() {

			var	$this = $(this);

			if (!browser.mobile) {

				$this.css('overflow-x', 'hidden');

				// Wrapper.
					$this.wrap('<div class="carousel-wrapper" />');
					var $wrapper = $this.parent();

				// Nav.
					var	$navRight = $('<div class="nav right"></div>').insertAfter($this),
						$navLeft = $('<div class="nav left"></div>').insertAfter($this),
						intervalId;

					$navLeft
						.on('mouseenter', function() {
							intervalId = window.setInterval(function() {
								$this.scrollLeft( $this.scrollLeft() - 5 );
							}, 10);
						})
						.on('mouseleave', function() {
							window.clearInterval(intervalId);
						});

					$navRight
						.on('mouseenter', function() {
							intervalId = window.setInterval(function() {
								$this.scrollLeft( $this.scrollLeft() + 5 );
							}, 10);
						})
						.on('mouseleave', function() {
							window.clearInterval(intervalId);
						});

				// Events.
					$window
						.on('resize load', function() {

							if ($this.width() < $this.prop('scrollWidth'))
								$wrapper.removeClass('no-scroll');
							else
								$wrapper.addClass('no-scroll');

						});

			}

			// Poptrox.
				$this.poptrox({
					baseZIndex: 100001,
					useBodyOverflow: false,
					usePopupEasyClose: false,
					overlayColor: '#000000',
					overlayOpacity: 0.75,
					usePopupDefaultStyling: false,
					popupLoaderText: '',
					usePopupNav: true,
					usePopupCaption: true
				});

				breakpoints.on('<=small', function() {

					$this[0]._poptrox.usePopupCaption = false;
					$this[0]._poptrox.usePopupCloser = false;
					$this[0]._poptrox.windowMargin = 10;

				});

				breakpoints.on('>small', function() {

					$this[0]._poptrox.usePopupCaption = true;
					$this[0]._poptrox.usePopupCloser = true;
					$this[0]._poptrox.windowMargin = 50;

				});

		});
		//slider

		$(document).ready(function() {

			$("input.slider").on("input change", function(event) {
				var element = $(this).parents("div.container");
				var pos = event.target.value;
		
				element.find("div.before").css({width: pos + "%"});
				element.find("div.slider-button").css({left: "calc(" + pos + "% - 18px)"});
			});
		
		});
})(jQuery);
	

//slideshow
	let slideIndex = 1;
	showSlides(slideIndex);

	// Next/previous controls
	function plusSlides(n) {
		showSlides(slideIndex += n);
	}

	// Thumbnail image controls
	function currentSlide(n) {
		showSlides(slideIndex = n);
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {
		slideIndex = 1}
	if (n < 1) {
		slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	}

//slideshow 2
	let planIndex = 1;
	showPlans(planIndex);

	// Next/previous controls
	function plusPlans(m) {
		showPlans(planIndex += m);
	}

	// Thumbnail image controls
	function currentPlan(m) {
		showPlans(planIndex = m);
	}

	function showPlans(m) {
		let j;
		let plans = document.getElementsByClassName("myPlans");
		let dots = document.getElementsByClassName("dot");
			if (m > plans.length) {
				planIndex = 1}
			if (m < 1) {
				planIndex = plans.length}
					for (j = 1; j < plans.length; j++) {
						plans[j].style.display = "none";
					}
					for (j = 0; j < dats.length; j++) {
						dots[j].className = dats[j].className.replace(" active", "");
					}
					plans[planIndex-1].style.display = "block";
					dots[planIndex-1].className += " active";
	}

// Copyright year change

document.addEventListener('DOMContentLoaded', (e) => {
	const yearE1 = document.getElementById('currentYear');
	const currentYear = new Date().getFullYear();

	yearE1.textContent = currentYear;
})