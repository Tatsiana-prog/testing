const modalIcon = document.querySelector('.modal-icon');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');

modalIcon.addEventListener('click', function () {
	this.classList.toggle('modal-icon--active');
	modal.classList.toggle('modal--active');
	body.style.overflow = "hidden" ;
	});

const modalLinks = document.querySelectorAll('.modal');

modalLinks.forEach(function (item) {
	item.addEventListener('click', function () {
		modalIcon.classList.remove('modal-icon--active');
		modal.classList.remove('modal--active');
		body.style.overflow = "scroll" ;
	});
})
