"use strict";

const images = [
  "img/img1.jpg",
  "img/img2.png",
  "img/img3.jpg",
  "img/img4.jpg",
  "img/img5.jpg",
  "img/img6.jpg",
  "img/img7.jpg",
];
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");
const sliderContainer = document.getElementById("slider-container");
let currentIndex = 0;
let sliderInterval;

buttonNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  sliderContainer.src = images[currentIndex];
  clearInterval(setInterval(switchImage, 3000));
});

buttonPrev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  sliderContainer.src = images[currentIndex];
  clearInterval(setInterval(switchImage, 3000));
});

function switchImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  sliderContainer.src = images[currentIndex];
}

setInterval(switchImage, 3000);