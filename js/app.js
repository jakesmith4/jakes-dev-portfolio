const navbar = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('#sidebar');
const date = document.querySelector('#date');
const serviceLinks = document.querySelectorAll('.service-link');
console.log(serviceLinks);
// add fixed class to navbar
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 80) {
    navbar.classList.add('navbar-fixed');
  } else {
    navbar.classList.remove('navbar-fixed');
  }
});

// show sidebar
navBtn.addEventListener('click', function () {
  sidebar.classList.add('show-sidebar');
});
closeBtn.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});
// set year
date.innerHTML = new Date().getFullYear();

serviceLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    e.currentTarget.childNodes[1].classList.toggle('show');
    e.currentTarget.classList.toggle('color');
  });
});
