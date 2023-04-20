let menuBtn = document.querySelector('.btn__menu');
let menu = document.querySelector('.header__nav');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})