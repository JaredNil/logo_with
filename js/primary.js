const burger = document.querySelectorAll('.mobileUp__burger');

burger[0].addEventListener('click', function (e) {


	if (e.target === burger[0]) {
		e.target.classList.toggle('_active');
		document.body.classList.toggle('_lock');
	}

})

let swipe = new Swiper('.swiper', {
	slidesPerView: 1

});
