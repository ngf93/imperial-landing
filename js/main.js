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

// mibile menu indicator
window.addEventListener('scroll', function() {
  document.querySelectorAll('.anchor').forEach(item => {
    let box = item.getBoundingClientRect();
    let y1=box.top + window.pageYOffset -1;
    let y2=box.bottom + window.pageYOffset;

    let link = document.querySelector('a.scroll-link[href="#' + item.id + '"]');

    console.log(window.pageYOffset);
    if (y1 <= window.pageYOffset && window.pageYOffset <= y2){

    	link.classList.add('active');
    } else {
    	link.classList.remove('active');
    }
  });;
});