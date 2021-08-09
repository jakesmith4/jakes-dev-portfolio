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
    e.currentTarget.classList.toggle('click');
  });
});

const serviceLinkA = document.querySelector('.service-link-1');
const serviceLinkB = document.querySelector('.service-link-2');
const serviceLinkC = document.querySelector('.service-link-3');
const serviceTextA = document.querySelector('.service-text-1');
const serviceTextB = document.querySelector('.service-text-2');
const serviceTextC = document.querySelector('.service-text-3');
let clickDown = false;
let clickDownB = false;
let clickDownC = false;

serviceLinkA.addEventListener('click', function () {
  if (clickDown === false) {
    clickDown = true;
  } else {
    clickDown = false;
  }
  if (clickDown) {
    serviceTextA.textContent = `I work on every single project with pride, putting all my efforts into each of my projects, working on them until they are profected. Call me today to start your project`;
  } else {
    serviceTextA.textContent = `I am an expert in web development and I am certain you will be pleased with my work. I offer a 100% guarantee on all my work`;
  }
});

serviceLinkB.addEventListener('click', function () {
  if (clickDownB === false) {
    clickDownB = true;
  } else {
    clickDownB = false;
  }
  if (clickDownB) {
    serviceTextB.textContent = `Using the most modern techniques in web development, I will have your project done fast, and done the right way, with Beautful Images, Fonts and Colors of your choice!`;
  } else {
    serviceTextB.textContent = `My custom designs are eye popping and beautiful. Choose from custom colors of your choice and we will get to work on your beautiful website`;
  }
});

serviceLinkC.addEventListener('click', function () {
  if (clickDownC === false) {
    clickDownC = true;
  } else {
    clickDownC = false;
  }
  if (clickDownC) {
    serviceTextC.textContent = `All my projects will look good on mobile and desktop screens, as I design it to fit mobile screens first, then desktop next. No matter the screen size, you website will look great!`;
  } else {
    serviceTextC.textContent = `I do all my web development Optimised for mobile and desktop. When your site is complete it will be mobile and desktop friendly`;
  }
});
