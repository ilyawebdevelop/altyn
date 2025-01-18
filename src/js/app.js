import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.7.1.min.js";
import { Fancybox } from "./modules/fancybox.esm.js";
import tippy from 'tippy.js';
import "./modules/bootstrap.bundle.min.js";
import './components.js';

flsFunctions.isWebp();

Fancybox.bind("[data-fancybox]", {
  closeButton: false,
});


// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);

// Инициализация слайдера productSlider
document.querySelectorAll('.productSlider').forEach(n => {
  const mySwiperProduct = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.productSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.productSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера partnersSlider
document.querySelectorAll('.partnersSlider').forEach(n => {
  const mySwiperPartners = new Swiper(n, {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      nextEl: n?.closest('.partnersSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
});

// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSlider').forEach(n => {
  const mySwiperNews = new Swiper(n, {
    slidesPerView: 4,
    spaceBetween: 24,
    speed: 600,
    navigation: {
      prevEl: n?.closest('.newsSliderW').querySelector('.navArrowPrev'),
      nextEl: n?.closest('.newsSliderW').querySelector('.navArrowNext'),
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
});

// Инициализация слайдера productMainSlider
document.querySelectorAll('.productMainSlider').forEach(n => {
  const mySwiperProductPage = new Swiper(n, {
    slidesPerView: 1,
    spaceBetween: 13,
    speed: 600,
    freeMode: false,
    watchSlidesProgress: true,
    mousewheel: false,
    navigation: {
      nextEl: n?.closest('.productSect').querySelector('.navArrowNext'),
    },
    thumbs: { // указываем на превью слайдер
      swiper: {
        el: document.querySelector('.productThumbSlider'),
        slidesPerView: 5,
        spaceBetween: 20,
        direction: 'vertical',
        speed: 600,
        watchSlidesProgress: true,
        breakpoints: {
          0: {
            spaceBetween: 5,
          },
          1200: {
            spaceBetween: 15,
          },
        },
      }
    },
  });
});



const mediaQuery991 = window.matchMedia('(max-width: 991px)');
function findOffset(element) {

  if (mediaQuery991.matches) {
    var top = 400, left = 0;
  } else {
    var top = 800, left = 0;
  }

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return {
    top: top,
    left: left
  };
}

window.onload = function () {
  var stickyHeader = document.getElementById('header');
  var headerOffset = findOffset(stickyHeader);

  window.onscroll = function () {
    // body.scrollTop is deprecated and no longer available on Firefox
    var bodyScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (bodyScrollTop > headerOffset.top) {
      stickyHeader.classList.add('fixed');
    } else {
      stickyHeader.classList.remove('fixed');
    }
  };

};

// loadmore
let loadmoreArray = document.querySelectorAll('.loadmore');
loadmoreArray.forEach(el => {
  el.addEventListener('click', () => {
    let parent = el.closest('.content-action');
    let content = parent.querySelector('.content');
    content.classList.add('show');
    el.style.display = 'none';
  });
});

// tippy
let aboutProductItemBtn = document.querySelectorAll('.about-product-item-btn');
let count = 0;
aboutProductItemBtn.forEach(el => {
  count++;
  let template = el.closest('.about-product-item-wrapper').querySelector('.about-product-item');
  let instanse = tippy(el, {
    content: template.innerHTML,
    allowHTML: true,
    placement: 'top-start',
    arrow: false,
    onClickOutside: false,
  });
  if (count == 1) {
    instanse.show();
  }
});
