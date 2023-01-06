$(document).ready(function () {
  $(".customer-logos").slick({
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
          slidesToShow: 3,
        },
      },
    ],
  });
});

const screen = async () => {
  let width = window.innerWidth;
  let result = width / 2;
  let left_screen = (document.getElementById("left_screen").style.marginLeft =
    "1078px");
  console.log(result);
};
