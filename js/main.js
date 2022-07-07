let burgerBtn = document.querySelector('.hamburger');
let navMobile = document.querySelector('.nav-mobile');
const navDesctop = document.querySelector('.nav-desctop');

//przyklejanie menu na scroll strony
function navBarScroll() {
	if (window.scrollY >= window.innerHeight - 60) {
		navDesctop.style.cssText = 'position:fixed;top:0';
	} else {
		navDesctop.style.cssText = 'position:absolute;bottom:0';
	}
}

//uaktywnanie menu mobilmnego
function burgerActive() {
	if (burgerBtn.classList.contains('is-active') == false) {
		burgerBtn.classList.add('is-active');
		navMobile.classList.add('nav--active');
	} else {
		burgerBtn.classList.remove('is-active');
		navMobile.classList.remove('nav--active');
	}
}
window.addEventListener('scroll', (event) => {
	navBarScroll();
});
burgerBtn.addEventListener('click', burgerActive);
navMobile.addEventListener('click', burgerActive);
