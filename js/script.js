let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar'); 

document.querySelector('#search-btn').onclick = () => {
	searchForm.classList.toggle('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

document.querySelector('#cart-btn').onclick = () => {
	shoppingCart.classList.toggle('active');
	searchForm.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}


document.querySelector('#login-btn').onclick = () => {
	loginForm.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	navbar.classList.remove('active');
}

document.querySelector('#menu-btn').onclick = () => {
	navbar.classList.toggle('active');
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
}

window.onscroll = () => {
	searchForm.classList.remove('active');
	shoppingCart.classList.remove('active');
	loginForm.classList.remove('active');
	navbar.classList.remove('active');
}

var swiper = new Swiper (".produtos-slider", {
	loop:true,
	spaceBetween: 20,
	autoplay: {
		delay: 7500,
		disableOnInteraction: false,
	},
	centeredSlides: true,
	breakpoints: {
		0: {
			sliderPerView: 1,
			//spaceBetween: 20,
		},
		768: {
			sliderPerView: 1,
			//spaceBetween: 40,
		},
		1024: {
			sliderPerView: 3,
			//spaceBetween: 50,
		},
	},
});

