$(function () {

  $(".header, .miracle__show-scroll").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1500);
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


