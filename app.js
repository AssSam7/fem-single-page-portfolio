const worksSlider = document.querySelector("#works-slider");
const arrowLeft = document.querySelector("#arrow-left");
const arrowRight = document.querySelector("#arrow-right");

arrowRight.addEventListener("click", () => {
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
});

arrowLeft.addEventListener("click", () => {
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
});
