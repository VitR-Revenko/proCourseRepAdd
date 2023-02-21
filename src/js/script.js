"use strict";

const images = Array.from(document.getElementsByClassName("js-img"));
const buttonPrev = document.querySelector(".js-btn-prev");
const buttonNext = document.querySelector(".js-btn-next");

const hideClass = "hide";
const showClass = "show";

function removeShowClass() {
  images.forEach((image) => image.classList.remove(showClass));
}

function hideButtons() {
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  if (currentIndex + 1 === images.length) {
    buttonNext.classList.add(hideClass);
  } else {
    buttonNext.classList.remove(hideClass);
  }
  if (currentIndex === 0) {
    buttonPrev.classList.add(hideClass);
  } else {
    buttonPrev.classList.remove(hideClass);
  }
}

buttonNext.addEventListener("click", () => {
  if (buttonNext.classList.contains(hideClass)) {
    return;
  }
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  removeShowClass();
  buttonNext.classList.remove(hideClass);
  images[currentIndex + 1].classList.add(showClass);
  images[currentIndex + 1].classList.remove(hideClass);
  images[currentIndex].classList.add(hideClass);
  hideButtons();
});

buttonPrev.addEventListener("click", () => {
  if (buttonPrev.classList.contains(hideClass)) {
    return;
  }
  const showItem = document.querySelector(".js-img.show");
  const currentIndex = images.indexOf(showItem);
  removeShowClass();
  buttonNext.classList.remove(hideClass);
  images[currentIndex - 1].classList.add(showClass);
  images[currentIndex - 1].classList.remove(hideClass);
  images[currentIndex].classList.add(hideClass);
  hideButtons();
});
