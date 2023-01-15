const openModal = () => {
  var element = document.getElementById("defaultModal");
  element.classList.remove("hidden");
  element.classList.add("flex");
  element.removeAttribute("aria-hidden");
  element.setAttribute("aria-modal", "true");
  element.setAttribute("role", "dialog");
};

const closeModal = () => {
  var element = document.getElementById("modal_overlay");
  element.classList.add("hidden");
};
