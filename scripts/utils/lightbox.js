// photographerMedias is called numerous times in this file, but is only defined in searcher.js
/* eslint-disable no-undef */
const lightbox = document.getElementById('lightbox');
const rightArrow = document.getElementById('next');
const leftArrow = document.getElementById('previous');

function lightboxMediaOpen() {
  lightbox.style.display = 'flex';
  return lightbox;
}

//* ***********Close lightbox function************//
function closeLightbox() {
  lightbox.style.display = 'none';
}

//* ***********Lightbox display media and images function************//
function displayVideoImage(count) {
  lightboxMediaOpen();
  if (photographerMedias.length > count && count >= 0) {
    if (photographerMedias[count].image) {
      const img = document.getElementById('lightbox_image_photographer');
      img.style.display = 'block';
      img.setAttribute('tabindex', '4');
      img.setAttribute('src', `assets/photographers/${photographerMedias[count].photographerId}/${photographerMedias[count].image}`);
      const videoLightbox = document.getElementById('lightbox_video_photographer');
      videoLightbox.style.display = 'none';
    } else if (photographerMedias[count].video) {
      const video = document.getElementById('lightbox_video_photographer');
      video.style.display = 'block';
      video.setAttribute('tabindex', '4');
      video.setAttribute('src', `assets/photographers/${photographerMedias[count].photographerId}/${photographerMedias[count].video}`);
      const imageLightbox = document.getElementById('lightbox_image_photographer');
      imageLightbox.style.display = 'none';
    }
    const pictureTitle = document.getElementById('lightbox_title');
    pictureTitle.textContent = photographerMedias[count].title;
    lightbox.setAttribute('position', count);
  }
}
//* ***********Previous and next button created************//
//* count relates to selected media's position. Every media has a number.
//* This number allows lightbox controls to switch from one to another
//* regarding selected media's number//

const previousMedia = (count) => {
  const countTemp = Number(count) - 1;
  displayVideoImage(countTemp);
};
const nextMedia = (count) => {
  const countTemp = Number(count) + 1;
  displayVideoImage(countTemp);
};

//* ***********Right button lightbox section************//
async function previousBtn() {
  const positionMedia = lightbox.getAttribute('position');
  previousMedia(positionMedia);
}
async function nextBtn() {
  const positionMedia = lightbox.getAttribute('position');
  nextMedia(positionMedia);
}
rightArrow.addEventListener('click', nextBtn, false);
leftArrow.addEventListener('click', previousBtn, false);

//* ***********Keydown functions ************//
function keydown(e) {
  if (e.keyCode === 27) {
    closeLightbox();
  }
  if (e.keyCode === 37) {
    previousBtn();
  }
  if (e.keyCode === 39) {
    nextBtn();
  }
}

//* ***********Close lightbox event listener************//
const closeBtn = document.querySelector('.lightbox_close');
document.addEventListener('keydown', keydown, false);

// eslint-disable-next-line func-names
closeBtn.onclick = function () {
  closeLightbox();
};
