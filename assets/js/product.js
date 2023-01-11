const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Filter tigger
const openFilter = () => {
  console.log("opentigger");
  var openTigger = document.getElementById("openFilter");
  var closeTigger = document.getElementById("closeFilter");
  var filterInfo = document.getElementById("filterInfo");
  openTigger.classList.remove("block");
  openTigger.classList.add("hidden");
  closeTigger.classList.remove("hidden");
  closeTigger.classList.add("block");
  filterInfo.classList.remove("hidden");
  filterInfo.classList.add("block");
};

const closeFilter = () => {
  var openTigger = document.getElementById("openFilter");
  var closeTigger = document.getElementById("closeFilter");
  var filterInfo = document.getElementById("filterInfo");
  openTigger.classList.remove("hidden");
  openTigger.classList.add("block");
  closeTigger.classList.remove("block");
  closeTigger.classList.add("hidden");
  filterInfo.classList.remove("block");
  filterInfo.classList.add("hidden");
};
