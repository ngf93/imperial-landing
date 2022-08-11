var mySwiper = new Swiper('.swiper-5', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 5,
      slidesPerGroup: 5,
      spaceBetween: 20,
    }
  }
});

/* current year */
let now = new Date();
let cur_year = now.getFullYear();
document.querySelector('#year').innerHTML = cur_year;


/*-------------------------
  Countdown JS
-----------------------------*/
// $(".ht-countdown").each(function(index, element) {
//     var $element = $(element),
//         $date = $element.data('date');

//     $element.countdown($date, function(event) {
//         var $this = $(this).html(event.strftime(''

//             +
//             '<div class="countdown-item"><span class="countdown-item__time">%D</span><span class="countdown-item__label">дней</span></div>' +
//             '<div class="countdown-item"><span class="countdown-item__time">%H</span><span class="countdown-item__label">часов</span></div>' +
//             '<div class="countdown-item"><span class="countdown-item__time">%M</span><span class="countdown-item__label">минут</span></div>' +
//             '<div class="countdown-item"><span class="countdown-item__time">%S</span><span class="countdown-item__label">секунд</span></div>'));
//     });
// });