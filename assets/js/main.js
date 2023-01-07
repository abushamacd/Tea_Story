$(document).ready(function () {
  $(".brand_logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".product_slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  });
});

const screen = () => {
  let width = window.innerWidth;
  let result = width / 2;
  let left_screen = (document.getElementById("left_screen").style.marginLeft =
    "1078px");
  console.log(result);
};

const openSidebar = () => {
  var element = document.getElementById("sidebar");
  element.classList.remove("hidden");
  element.classList.add("block");
};

const closeSidebar = () => {
  var element = document.getElementById("sidebar");
  element.classList.remove("block");
  element.classList.add("hidden");
};
