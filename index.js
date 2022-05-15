const btnMobileMenu = document.querySelector('.toggle');
const ulNavbar = document.querySelector('.nav-list');

btnMobileMenu.addEventListener('click', () => {
    ulNavbar.classList.toggle('hidden');
    console.log('lofloflo');
});