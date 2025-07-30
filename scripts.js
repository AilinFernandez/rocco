window.addEventListener('scroll', function () {
  const nav = document.getElementById('mainNav');
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

$(document).ready(function(){
  $('.testimonial-slider').slick({
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3,
    arrows: true,
    dots: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '0px'
        }
      }
    ]
  });
});

