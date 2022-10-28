const buttonReserve = document.querySelector('.phone-button__header');
const formOrder = document.querySelector('.order-button');
const body = document.querySelector('body');
const buttonForm = document.querySelector('.order-button__form');
const getApply = document.querySelector('.get-apply');
const closeButtonOrder = document.querySelector('.close-button');
const applyButton = document.querySelector('.apply-button__form');
const applyClose = document.querySelector('.apply__close-button');
const aboutTitle = document.querySelector('.about-title');
const burgerIcon = document.querySelector('.burger__icon');
const headerBurger = document.querySelector('.nav__header--burger');
const mainIntro = document.querySelector('.page-main--intro');

buttonReserve.addEventListener('click', function () {
  formOrder.classList.remove('hidden');
  body.classList.add('order');
})

buttonForm.addEventListener('click', function(evt) {
  evt.preventDefault;

  getApply.classList.remove('hidden');
  formOrder.classList.add('hidden');
})

closeButtonOrder.addEventListener('click', function () {
  formOrder.classList.add('hidden');
  body.classList.remove('order');
  getApply.classList.add('hidden');
})

applyButton.addEventListener('click', function() {
  getApply.classList.add('hidden');
  body.classList.remove('order');
})

applyClose.addEventListener('click', function() {
  getApply.classList.add('hidden');
  body.classList.remove('order');
})

burgerIcon.addEventListener('click', function() {
  burgerIcon.classList.toggle('active');
  headerBurger.classList.toggle('nav__header--burger--active');
  mainIntro.classList.toggle('hidden');
})

if (burgerIcon.classList.contains('active')) {
  mainIntro.classList.add('translate');
} else {
  mainIntro.classList.remove('translate');
}

const loop = document.querySelector('.tehno-loop');

loop.addEventListener('click', function() {
  
})