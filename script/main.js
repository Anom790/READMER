



 
 const gallary = new Swiper('.gallary', {

	


	
	
	 	
	 	slidePrevClass: 'foto-slide-prev',
	 	slideActiveClass: 'foto-slide-active',
	 	slideNextClass: 'foto-slide-next',
      grabCursor: true,
		initialSlide: 2,
		slidesPerView: 2,
		centerSlides: 3,
		initialSlide: 2,		
		loop: false,
		direction: 'horizontal',
	  

		
	
	

	

	
		breakpoints: {
			320: {

				slidesPerView: 1,
				centerSlides: 1,
				initialSlide: 2,

			},


			580: {
				slidesPerView: 2,
				centerSlides: 2,
				initialSlide: 2,
			
			},


			850: {
				initialSlide: 2,
				slidesPerView: 2,
				centerSlides: 'true',
				initialSlide: 2,
			},


			1600: {
				initialSlide: 2,
				slidesPerView: 2,
				centerSlides: 2,
				initialSlide: 2,
			}
		},





	

 })



const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	slidesPerView: 5,
	grabCursor: true,
	speed: 1000,
	autoplay: true,
	loop: true,
	grid: {
	  rows: 2,

	},

	slidePrevClass: 'foto-s',
	slideActiveClass: 'foto-s',
	slideNextClass: 'foto-s',

	
 

	// Navigation arrows
	
	
	breakpoints: {

		320: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 3,
			centerSlides: 3,
		},

		350: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 4,

		},

		370: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 2,
		},



		550: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 3,
		},

		750: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 4,
		},

		1000: {
			grid: {
				rows: 2,
		 
			 },
			slidesPerView: 5,
		}



		

	},

	

	

 });

 



 
const swiperMenu = new Swiper('.menu__slider', {

	
	slidePrevClass: 'foto-slide-p',
	slideActiveClass: 'foto-slide-a',
	slideNextClass: 'foto-slide-n',
	

	
	

	

	grid: {
		rows: 2,	
	},

	

	

	breakpoints: {

	320: {

	
		slidesPerView: 1,
		slidesPerGroup: 1,

		grid: {
			rows: 1,	
		},
	


	},


	620: {

	
		slidesPerView: 2,
		slidesPerGroup: 1,

		grid: {
			rows: 1,	
		},
	


	},


	950: {
		slidesPerView: 3,

		grid: {
			rows: 1,	
		},
	

	},


	1250: {
		slidesPerView: 4,
		spaceBetween: 20,

		grid: {
			rows: 2,	
		},
	}


	


	}

	
});



let tabs = document.querySelector('.tabs');
let menuSlider = document.querySelectorAll('.menu__slider-block');



tabs.addEventListener('click', function (e)  {
	if(e.target.classList.contains('tabs__item')) {
			this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'));
			e.target.classList.add('active');
	}

	menuSlider.forEach(slider => slider.classList.remove('show'));
	let tabIndex = e.target.dataset.tab;
	let thisSwiper = document.querySelector(tabIndex);
	thisSwiper.classList.add('show');

});


window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);



function overflowTabs() {
	let outerTabs = document.querySelector('.tabs__container');
	let innerTabs = document.querySelector('.tabs');
	if (innerTabs.offsetWidth > outerTabs.offsetWidth) {
		innerTabs.classList.add('overflow');
	} else {
		innerTabs.classList.remove('overflow');
	}
};



document.querySelector('.header__burger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('.second__menu').classList.toggle('active')
	document.querySelector('body').classList.toggle('lock')
});







