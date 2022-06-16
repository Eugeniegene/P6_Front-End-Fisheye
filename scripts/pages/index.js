//* ***********FETCHING JSON DATA************//
async function getDataJson() {
  const response = await fetch('data/photographers.json');
  const data = await response.json();
  return data;
}

//* ***********DISPLAYING PHOTOGRAPHER DATA************//
async function displayData(photographers) {
  const photographersSection = document.querySelector('.photographer_section');

  photographers.forEach((photographer) => {
    // photographerFactory is used in photographer.js file
    // eslint-disable-next-line no-undef
    const photographerModel = photographerFactory(photographer);
    const userCard = photographerModel.getUserCard();
    photographersSection.appendChild(userCard);
  });
}

//* ***********FETCH PHOTOGRAPHER DATA************//
async function init() {
  const { photographers } = await getDataJson();
  displayData(photographers);
}

init();
