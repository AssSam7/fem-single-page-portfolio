/* DOM Elements */
const worksSlider = document.querySelector("#works-slider");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

let width = document.documentElement.clientWidth || window.innerWidth;

/* Templates */
function getInitialMobileWorksSliderHTML() {
  return `<div data-id="1">
            <img
              src="assets/image-slide-1.jpg"
              alt="Slide 1"
              class="rounded-lg"
            />
          </div>`;
}

function getInitialDesktopWorksSliderHTML() {
  return `<div data-id="1">
            <img
              src="assets/image-slide-1.jpg"
              alt="Slide 1"
              class="rounded-lg"
            />
          </div>
          <div data-id="2">
            <img
              src="assets/image-slide-2.jpg"
              alt="Slide 2"
              class="rounded-lg"
            />
          </div>
          <div data-id="3">
            <img
              src="assets/image-slide-3.jpg"
              alt="Slide 3"
              class="rounded-lg"
            />
          </div>`;
}

/* Desktop Handlers */
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

/* Mobile Logic */
function arrowRightMobileHandler() {
  const refId = parseInt(worksSlider.firstElementChild.dataset["id"]);
  const newId = refId === 5 ? 1 : refId + 1;
  const newImgDivHTML = `<div data-id="${newId}">
            <img
              src="assets/image-slide-${newId}.jpg"
              alt="Slide ${newId}"
              class="rounded-lg"
            />
          </div>`;
  worksSlider.innerHTML = newImgDivHTML;
}

function arrowLeftMobileHandler() {
  const refId = parseInt(worksSlider.firstElementChild.dataset["id"]);
  const newId = refId === 1 ? 5 : refId - 1;
  const newImgDivHTML = `<div data-id="${newId}">
            <img
              src="assets/image-slide-${newId}.jpg"
              alt="Slide ${newId}"
              class="rounded-lg"
            />
          </div>`;
  worksSlider.innerHTML = newImgDivHTML;
}

if (width > 688) {
  worksSlider.innerHTML = getInitialDesktopWorksSliderHTML();
  arrowRight.addEventListener("click", arrowRightDesktopHandler);
  arrowLeft.addEventListener("click", arrowLeftDesktopHandler);
} else {
  worksSlider.innerHTML = getInitialMobileWorksSliderHTML();
  arrowRight.addEventListener("click", arrowRightMobileHandler);
  arrowLeft.addEventListener("click", arrowLeftMobileHandler);
}

window.addEventListener("resize", (e) => {
  width = e.target.outerWidth;

  if (width > 688) {
    /* Load Initial Content */
    worksSlider.innerHTML = getInitialDesktopWorksSliderHTML();

    /* Remove Other Listeners */
    arrowRight.removeEventListener("click", arrowRightMobileHandler);
    arrowLeft.removeEventListener("click", arrowLeftMobileHandler);

    /* Add Listeners */
    arrowRight.addEventListener("click", arrowRightDesktopHandler);
    arrowLeft.addEventListener("click", arrowLeftDesktopHandler);
  } else {
    /* Load Initial Content */
    worksSlider.innerHTML = getInitialMobileWorksSliderHTML();

    /* Remove Other Listeners */
    arrowRight.removeEventListener("click", arrowRightDesktopHandler);
    arrowLeft.removeEventListener("click", arrowLeftDesktopHandler);

    /* Add Listeners */
    arrowRight.addEventListener("click", arrowRightMobileHandler);
    arrowLeft.addEventListener("click", arrowLeftMobileHandler);
  }
});
