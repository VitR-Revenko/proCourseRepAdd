"use strict";

const images = Array.from(document.getElementsByClassName("js-img"));
const buttonPrev = document.querySelector(".js-btn-prev");
const buttonNext = document.querySelector(".js-btn-next");

const disabledClass = "disabled";
const showClass = "show";

function removeShowClass() {
  images.forEach((image) => image.classList.remove(showClass));
}

function disabledButtons() {
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  if (currentIndex + 1 === images.length) {
    buttonNext.classList.add(disabledClass);
  } else {
    buttonNext.classList.remove(disabledClass);
  }
  if (currentIndex === 0) {
    buttonPrev.classList.add(disabledClass);
  } else {
    buttonPrev.classList.remove(disabledClass);
  }
}

buttonNext.addEventListener("click", () => {
  if (buttonNext.classList.contains(disabledClass)) {
    return;
  }
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  removeShowClass();
  buttonNext.classList.remove(disabledClass);
  images[currentIndex + 1].classList.add(showClass);
  images[currentIndex + 1].hidden = false;
  images[currentIndex].hidden = true;
  disabledButtons();
});

buttonPrev.addEventListener("click", () => {
  if (buttonPrev.classList.contains(disabledClass)) {
    return;
  }
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  removeShowClass();
  buttonNext.classList.remove(disabledClass);
  images[currentIndex - 1].classList.add(showClass);
  images[currentIndex - 1].hidden = false;
  images[currentIndex].hidden = true;
  disabledButtons();
});
