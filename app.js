/* DOM Elements */
const worksSlider = document.querySelector("#works-slider");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

let width = document.documentElement.clientWidth || window.innerWidth;

function arrowRightDesktopHandler() {
  const refId = parseInt(worksSlider.firstElementChild.dataset["id"]) + 3;
  const newId = refId > 5 ? refId - 5 : refId;
  const nextImgDivHTML = `<div data-id="${newId}">
            <img
              src="assets/image-slide-${newId}.jpg"
              alt="Slide ${newId}"
              class="rounded-lg"
            />
          </div>`;

  worksSlider.removeChild(worksSlider.firstElementChild);

  worksSlider.insertAdjacentHTML("beforeend", nextImgDivHTML);
}

function arrowLeftDesktopHandler() {
  const refId = parseInt(worksSlider.lastElementChild.dataset["id"]) - 3;
  console.log(refId);
  const newId = refId < 1 ? 5 - Math.abs(refId) : refId;
  const nextImgDivHTML = `<div data-id="${newId}">
            <img
              src="assets/image-slide-${newId}.jpg"
              alt="Slide ${newId}"
              class="rounded-lg"
            />
          </div>`;

  worksSlider.removeChild(worksSlider.lastElementChild);

  worksSlider.insertAdjacentHTML("afterbegin", nextImgDivHTML);
}

if (width > 768) {
  arrowRight.addEventListener("click", arrowRightDesktopHandler);
  arrowLeft.addEventListener("click", arrowLeftDesktopHandler);
}

window.addEventListener("resize", (e) => {
  width = e.target.outerWidth;

  if (width > 768) {
    arrowRight.addEventListener("click", arrowRightDesktopHandler);
    arrowLeft.addEventListener("click", arrowLeftDesktopHandler);
  } else {
    arrowRight.removeEventListener("click", arrowRightDesktopHandler);
    arrowLeft.removeEventListener("click", arrowLeftDesktopHandler);
  }
});
