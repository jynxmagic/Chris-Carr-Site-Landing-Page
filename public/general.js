window.onload = () => {
  if (document.getElementsByClassName(".facts-list").length != 0) {
    new Glide(".facts-list", {
      type: "carousel",
      perView: 3,
      startAt: 0,
      autoplay: 2500,
      breakpoints: {
        0: { perView: 1 },
        576: { perView: 2 },
        992: { perView: 3 },
      },
    }).mount();
  }
  if (document.getElementsByClassName(".services-list").length != 0) {
    new Glide(".services-list", {
      type: "carousel",
      perView: 3,
      startAt: 0,
      autoplay: 2500,
      breakpoints: {
        0: { perView: 1 },
        576: { perView: 2 },
        992: { perView: 3 },
      },
    }).mount();
  }
  if (document.getElementsByClassName(".testimonials-slider").length != 0) {
    new Glide(".testimonials-slider", {
      type: "carousel",
      perView: 3,
      startAt: 0,
      autoplay: 2500,
      breakpoints: {
        0: { perView: 1 },
        576: { perView: 2 },
        992: { perView: 3 },
      },
    }).mount();
  }
  if (document.getElementsByClassName(".gallery-list").length != 0) {
    new Glide(".gallery-list", {
      type: "carousel",
      perView: 3,
      startAt: 0,
      autoplay: 2500,
      breakpoints: {
        0: { perView: 1 },
        576: { perView: 2 },
        992: { perView: 3 },
      },
    }).mount();
  }

  new fullpage("#fullpage", {
    licenseKey: " C7F41B00-5E824594-9A5EFB99-B556A3D5",
    anchors: [
      "slide01",
      "slide02",
      "slide03",
      "slide04",
      "slide05",
      "slide06",
      "slide07",
    ],
    lockAnchors: false,
    dragAndMove: false,
    menu: "#nav",
    lazyLoad: false,
    slidesNavigation: true,
    scrollOverflow: true,
    fadingEffect: true,
    responsiveWidth: 0,
    responsiveHeight: 0,
    paddingTop: "3em",
    paddingBottom: "10px",
    responsiveSlides: true,
  });
};
