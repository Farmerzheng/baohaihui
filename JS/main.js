var navBtn = document.querySelector(".nav-btn");
var navInner = document.querySelector(".nav-inner");
var navItemArr = document.querySelectorAll(".nav-item");

navBtn.addEventListener("click", navBtnClickHandler);

function navBtnClickHandler() {
  if (hasClass(navInner, "unfold")) {
    removeClass(navInner, "unfold");
  } else {
    addClass(navInner, "unfold");
  }

}

//循环为列表项挂接事件

for (var i = 0; i < navItemArr.length; i++) {
  navItemArr[i].addEventListener("mouseenter", navItemOverHandler);
  navItemArr[i].addEventListener("mouseleave", navItemOutHandler)
}

function navItemOverHandler() {
  addClass(this, "hover");
}

function navItemOutHandler() {
  removeClass(this, "hover");
}


$('.banner').owlCarousel({
  loop: true,
  margin: 0,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  animateOut: 'fadeOut',
  responsive: {
    0: {
      items: 1,
      nav: true
    }
  }
})

$('.owner').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      // nav: true
    },
    1000: {
      items: 2,
      // nav: true,
      loop: true,
      margin: 20
    }
  }
})

$('.news').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 1000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
      // nav: true
    },
    768: {
      items: 2,
      // nav: true,
      loop: true,
      margin: 20
    },
    1000: {
      items: 4,
      // nav: true,
      loop: true,
      margin: 20
    }
  }
})