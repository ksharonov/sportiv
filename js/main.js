$(document).ready(function () {

  // Show nav mobail
  $('.navbar-toggle').on('click', function () {
    $('body').toggleClass('page-no-scroll');
    $(this).toggleClass('navbar-toggle--active');
    $('.nav').toggleClass('nav--open');
  });

  if($(window).width() < 992) {
    $('.nav__item--drop .nav__link').on('click', function(e) {
      e.preventDefault();
      $(this).parent().toggleClass('nav__item--drop-open');
      $(this).next('.drop').slideToggle(200);
    });
  };

  // Nav layer
  if($(window).width() > 992) {
    $('.nav__item--drop').hover(function () {
      $('.layer').toggleClass('layer--show');
    });
  };

  // Search
  $('.open-search-js').on('click', function(e) {
    e.preventDefault();
    $('.layer').removeClass('layer--show');
    $('.search').addClass('search--open');
    $('.layer').addClass('layer--show');
  })

  $('.search__close--js').on('click', function() {
    $('.search').removeClass('search--open');
    $('.layer').removeClass('layer--show');
  })

  $('.layer').on('click', function() {
    $('.search').removeClass('search--open');
    $('.filter').removeClass('filter--open');
    $('.layer').removeClass('layer--show layer--filter');
  })

  // Filter open
  $('.filter-open--js').on('click', function() {
    $('.layer').removeClass('layer--show');
    $('.filter').addClass('filter--open');
    $('.layer').addClass('layer--show');
    $('.layer').addClass('layer--show layer--filter');
  });

  // Filter close
  $('.filter__close--js').on('click', function() {
    $('.layer').removeClass('layer--show layer--filter');
    $('.filter').removeClass('filter--open');
  });

  // Quantity
  $('.quantity__down').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.quantity__up').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // Modal
  $('.open-modal-thanks').on('click', function() {
    $('.modal--thanks').addClass('modal--open');
  });

  $('.open-modal-error').on('click', function() {
    $('.modal--error').addClass('modal--open');
  });

  $('.open-modal-addresses').on('click', function() {
    $('.modal--addresses').addClass('modal--open');
  });

  $('.open-modal-login').on('click', function() {
    $('.modal--login').addClass('modal--open');
  });

  $('.open-modal-reg').on('click', function() {
    $('.modal--reg').addClass('modal--open');
  });

  $('.open-modal-pass').on('click', function() {
    $('.modal--pass').addClass('modal--open');
  });

  // Modal close
  $('.modal__close').on('click', function() {
    $('.modal').removeClass('modal--open');
  });

  // Tabs
  $('.tabs__item').not(':first').hide();
  $('.tabs__navItem').click(function() {
    $('.tabs__navItem').removeClass('active').eq($(this).index()).addClass('active');
    $('.tabs__item').hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass('active');

  // Intro sl
  var swiper = new Swiper(".intro__sl", {
    loop: true,
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 544000,
      disableOnInteraction: false,
    },
    breakpoints: {
      // 576: {
      //   slidesPerView: 3,
      // },
    },
  });

  // Product sl
  var swiper = new Swiper(".product__sl", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      992: {
        allowTouchMove: false,
      },
      1200: {
        slidesPerView: 4,
        allowTouchMove: false,
      },
    },
  });

  // Product sl
  var swiper = new Swiper(".events__sl", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  });
  
  // Card sl
  var swiper1 = new Swiper(".card__thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    autoHeight: true,
    direction: 'horizontal',
    watchSlidesProgress: true,
    breakpoints: {
      768: {
        spaceBetween: 24,
        slidesPerView: 5,
        direction: 'vertical',
      },
      992: {
       slidesPerView: 5,
       direction: 'vertical',
      },
    },
  });

  var swiper2 = new Swiper(".card__sl", {
    spaceBetween: 0,
    slidesPerView: 1,
    thumbs: {
      swiper: swiper1,
    },
  });

  // Team sl
  var swiper = new Swiper(".team__sl", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 2,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

  // Projects sl
  var swiper = new Swiper(".projects__sl", {
    spaceBetween: 16,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    breakpoints: {
      992: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });

});