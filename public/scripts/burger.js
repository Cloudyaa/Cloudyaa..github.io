const burger = document.querySelector('.navbar-toggler');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');


const toggleClasses = () => {
  burger.classList.toggle('collapsed');
  burger.classList.toggle('push-up');
  nav.classList.toggle('hidden');
};

burger.addEventListener('click', toggleClasses);

navItems.forEach(navItem => navItem.addEventListener('click', toggleClasses));


