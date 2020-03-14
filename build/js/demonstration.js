'use strict';

(function () {
	let button = document.querySelector('.promo__toggle');
	let container = document.querySelector('.promo__demonstration');
	let i = 1;

	button.addEventListener('click', function() {
		i++;
		if (i > 3) {
			i = 1;
		}
		container.style.backgroundImage = 'url(build/img/main-radiator' + i + '.png)';
	});
})();