document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('nav');

	window.addEventListener('scroll', function () {
		if (window.scrollY > 50) {
			nav.classList.add('header-scroll');
		} else {
			nav.classList.remove('header-scroll');
		}
	});
});

var swiper = new Swiper('.swiper-container', {
	effect: 'coverflow',
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: 'auto',
	coverflowEffect: {
		rotate: 40,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	loop: true,
});
