const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const headerBurger = document.querySelector('.nav__header--burger');
const burgerIcon = document.querySelector('.burger__icon');
const mainIntro = document.querySelector('.page-main--intro');
const promo = document.querySelector('.promo');
const footer = document.querySelector('footer');
const main = document.querySelector('main');
const body = document.querySelector('body');

const buttonReserve = document.querySelector('.phone-button__header');
const formOrder = document.querySelector('.order-button');
const closeButtonOrder = document.querySelector('.close-button');
const ticketOrder = document.querySelector('.ticket-button-main');

const buttonForm = document.querySelector('.order-button__form');
const getApply = document.querySelector('.get-apply');
const applyButton = document.querySelector('.apply-button__form');
const applyClose = document.querySelector('.apply__close-button');



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


buttonReserve.addEventListener('click', function () {
  formOrder.classList.remove('hidden');
  body.classList.add('order');
})

closeButtonOrder.addEventListener('click', function () {
  formOrder.classList.add('hidden');
  body.classList.remove('order');
  getApply.classList.add('hidden');
})
ticketOrder.addEventListener('click', function () {
  formOrder.classList.toggle('hidden');
  body.classList.add('order');
})

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___-__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});

buttonForm.addEventListener('click', function(evt) {
  evt.preventDefault;

  getApply.classList.remove('hidden');
  formOrder.classList.add('hidden');

})

applyButton.addEventListener('click', function() {
  getApply.classList.add('hidden');
  body.classList.remove('order');
})

applyClose.addEventListener('click', function() {
  getApply.classList.add('hidden');
  body.classList.remove('order');
})

