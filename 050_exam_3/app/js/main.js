// import "slick-carousel";

let sliderWork = function () {
	const slider = 	$(".slider");
	let allSlides = $(".slider__slide");
	let currentActive;


	slider.append('<button class="slider__button slider__prev"> < </button>');
	slider.prepend('<button class="slider__button slider__next"> > </button>');

	const buttonPrev = 	$(".slider__prev");
	const buttonNext = 	$(".slider__next");

	function findCurrentActive () {
		for (let i = 0; i < allSlides.length; i++) {
			if (allSlides[i].classList.contains('active')) {
				currentActive = i;
			};
		}
	}

	buttonPrev.on("click", function(){
		findCurrentActive();
		
		allSlides[currentActive].classList.toggle('active');
		if ((currentActive - 1) < 0) {
			currentActive = (allSlides.length - 1);
		} else {
			currentActive -= 1;
		}
		allSlides[currentActive].classList.toggle('active');
	});

	buttonNext.on("click", function(){
		findCurrentActive();

		allSlides[currentActive].classList.toggle('active');
		if ((currentActive + 1) >= allSlides.length) {
			currentActive = 0;
		} else {
			currentActive += 1;
		}
		allSlides[currentActive].classList.toggle('active');
	});

	
}

sliderWork();
