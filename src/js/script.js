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

// const img1 = new Image();
// img1.src = "../../img/img1.jpg";

// const img2 = new Image();
// img2.src = "../../img/img2.jpg";

// const img3 = new Image();
// img3.src = "../../img/img3.jpg";

// const images = [img1, img2, img3];

// const wrapper = document.getElementById("imgWrap");
// const buttons = document.querySelectorAll(".btn");
// const disabledClass = "disabled";

// function showImage() {
//   wrapper.appendChild(images[0]);
// }

// function removeActiveClass() {
//   images.forEach((img) => img.classList.remove(activeClass));
// }

// function disableButton() {
//   if (condition) {
//   }
// }

// buttons.forEach((button) => {
//   button.addEventListener("click", (event) => {
//     if (button.classList.contains(disabledClass)) {
//       return;
//     }
//     const btnAttr = button.getAttribute("data-button");
//     const activeItem = document.querySelector("img");
//     const currentIndex = images.indexOf(activeItem);
//     if (btnAttr === "next") {
//         wrapper.appendChild(images[currentIndex + 1]);
//     }
//     if (btnAttr === "prev") {
//         wrapper.appendChild(images[currentIndex - 1]);
//     }
//   });
// });

// window.addEventListener("load", function () {
//   showImage();
// });
