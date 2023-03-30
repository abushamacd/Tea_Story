$(document).ready(function () {
  $(".brand_logos").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
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
          slidesToShow: 1,
        },
      },
    ],
  });

  // text slider js start
  $(".text_slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
    pauseOnHover: false,
  });
  // text slider js end
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
  var overlay = document.getElementById("sidebar_overlay");
  element.classList.remove("hidden");
  element.classList.add("block");
  overlay.classList.remove("hidden");
  overlay.classList.add("block");
};

const closeSidebar = () => {
  var element = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebar_overlay");
  element.classList.remove("block");
  element.classList.add("hidden");
  overlay.classList.remove("block");
  overlay.classList.add("hidden");
};

// Dropdown tigger
const dropdownTigger = () => {
  var upAngle = document.getElementById("upAngle");
  var downAngle = document.getElementById("downAngle");

  if (upAngle.classList.contains("block")) {
    upAngle.classList.remove("block");
    upAngle.classList.add("hidden");
    downAngle.classList.remove("hidden");
    downAngle.classList.add("block");
  } else if (downAngle.classList.contains("block")) {
    upAngle.classList.remove("hidden");
    upAngle.classList.add("block");
    downAngle.classList.remove("block");
    downAngle.classList.add("hidden");
  }
};

// Active link
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  }
});

const controlForm = () => {
  document.getElementById("openLogin").click();
  document.getElementById("closeCreateAccount").click();
};
