// Скролл и удаление якорей из url

document.addEventListener("DOMContentLoaded", () => {
  const scrollLinks = document.querySelectorAll(".header a, .greating__show-scroll a");

  scrollLinks.forEach(anchor => {
    anchor.addEventListener("click", event => {
      event.preventDefault();
      let id = anchor.getAttribute('href');
      let targetElement = document.querySelector(id);
      let top = targetElement.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: top,
        behavior: "smooth"
      });
    });
  });
});



// Logo

const logo = document.querySelector('.header__logo');
const logoImg = document.querySelector('.header__logo-lp');
const logoLink = document.querySelector('.header__logo-link');

logo.addEventListener('mouseover', function () {
  logoImg.style.transform = 'translateY(-100%)';
  logoLink.style.top = '0px';
})

logo.addEventListener('mouseout', function () {
  logoImg.style.transform = 'translateY(0)';
  logoLink.style.top = '80px';
})


// Slider Swiper settings

const swiper = new Swiper('.swiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev',
  },
  breakpoints: {
    380: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    630: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    820: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1020: {
      slidesPerView: 3.8,
      spaceBetween: 20,
    },
    1290: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
  },
});


// Fancybox

Fancybox.bind('[data-fancybox]', {

});


// Gallery

const gallerySlide = document.querySelectorAll('.thumbs__slide');

gallerySlide.forEach(img => {
  img.onclick = () => {
    gallerySlide.forEach(remove => {
      remove.classList.remove('active');
    });
    img.classList.add('active');

    let src = img.querySelector('.thumbs__img').src;

    document.querySelector('.gallery__img').src = src;
  };
});


// Burger menu 

const burger = document.querySelector('.burger');
const burgerWrapper = document.querySelector('.burger__wrapper');
const menu = document.querySelector('.nav');

// При клике по бургеру

burger.addEventListener('click', function () {
  menu.classList.toggle('active');
  burgerWrapper.classList.toggle('active');
  document.body.classList.toggle('stop-scroll');
});

// При клике по ссылке в меню

menu.addEventListener('click', function (e) {
  if (e.target.matches('a')) {
    menu.classList.remove('active');
    burgerWrapper.classList.remove('active');
    document.body.classList.remove('stop-scroll');
  }
})