/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const photographersSection = document.querySelector('.photograph-header');
const photographersMedia = document.querySelector('.photograph-media');
let photographerMedias = [];

//* ***********FETCHING JSON DATA************//
async function getDataJson() {
  const response = await fetch('data/photographers.json');
  const data = await response.json();
  return data;
}

//* ***********DISPLAY DATA FUNCTION************//
async function displayData(photographers, medias, iDPhotographer) {
  photographers.forEach((photographer) => {
    if (iDPhotographer == photographer.id) {
      const photographerModel = photographerFactory(photographer);
      const displayPhotographerData = photographerModel.displayPhotographerData();
      photographerModel.informationsupp();
      photographersSection.appendChild(displayPhotographerData);
      displayDataMedia(medias, iDPhotographer, 'populaire');
    }
  });
}

//* ***********FUNCTION GETTING PHOTOGRAPHER MEDIAS AND INFORMATIONS************//
async function init(iDPhotographer) {
  const { photographers } = await getDataJson();
  const { media } = await getDataJson();

  displayData(photographers, media, iDPhotographer);
}

//* ***********PHOTOGRAPHER URL VISIBLE************//
const url = window.location.href;
const urlArray = url.split('?');
const iDPhotographerStart = urlArray[urlArray.length - 1];

//* ***********CHANGE SELECTION************//
const menuSelect = document.getElementById('searcher-box');
menuSelect.addEventListener('change', async (e) => {
  const { media } = await getDataJson();
  displayDataMedia(media, iDPhotographerStart, e.target.value);
});

init(iDPhotographerStart);
