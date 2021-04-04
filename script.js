/* navbar */
const navBurger = document.querySelector('.navbar-burger');
const navCross = document.querySelector('.navbar-cross');
const nav = document.querySelector('.navbar-menu');

navBurger.addEventListener('click', function() {
  toggleNav();
});
navCross.addEventListener('click', function() {
  toggleNav();
});

function toggleNav() {
  nav.classList.toggle('nav-active');
  navBurger.classList.toggle('nav-hide')
};
