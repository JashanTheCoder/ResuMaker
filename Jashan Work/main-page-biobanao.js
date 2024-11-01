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

window.addEventListener('load', function () {
	// Automatically scroll the images on page load
	smoothScrollImages();
});

window.addEventListener('scroll', handleScroll);

function handleScroll() {
	const scrollY = window.scrollY;
	const resume1 = document.querySelector('.resume-1');
	const resume2 = document.querySelector('.resume-2');

	// Apply smooth scrolling effect on the images during actual page scroll
	resume1.style.transform = `translateY(${scrollY * 1.5}px)`;
	resume2.style.transform = `translateY(-${scrollY * 1.5}px)`;
}

// Function to scroll the images smoothly on page load
function smoothScrollImages() {
	const duration = 300; // Duration for image scroll effect
	let start = null;

	const resume1 = document.querySelector('.resume-1');
	const resume2 = document.querySelector('.resume-2');

	function step(timestamp) {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		const scrollStep = Math.min(progress / duration, 1);

		// Simulate smooth image scroll by changing the transform property
		resume1.style.transform = `translateY(${scrollStep * 70}px)`; // Adjust the multiplier as needed
		resume2.style.transform = `translateY(-${scrollStep * 70}px)`; // Adjust the multiplier as needed

		if (progress < duration) {
			window.requestAnimationFrame(step);
		}
	}

	// Start the animation for the images
	window.requestAnimationFrame(step);
}
