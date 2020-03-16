'use strict';

(function(){
	let thumbnails = document.querySelectorAll('.photo__img');
	let bigPhoto = document.querySelector('.photo__big');
	let btnPrev = document.querySelector('.photo__prev-btn');
	let btnNext = document.querySelector('.photo__next-btn');
	let startPhoto = bigPhoto.src;
	let i = 0;

	btnNext.addEventListener('click', function() {
		thumbnails[i].classList.remove('photo__img--active');
		i++;
			if (i > thumbnails.length - 1) {
				i = 0;
			}

		thumbnails[i].classList.add('photo__img--active');
		bigPhoto.src = thumbnails[i].src;

			if (i === 0) {
				bigPhoto.src = startPhoto;
			}
	}); 

	btnPrev.addEventListener('click', function() {
		thumbnails[i].classList.remove('photo__img--active');
		i--;
			if (i < 0) {
				i = thumbnails.length - 1;
			}

		thumbnails[i].classList.add('photo__img--active');
		bigPhoto.src = thumbnails[i].src;

			if (i === 0) {
				bigPhoto.src = startPhoto;
			}
	});
})();