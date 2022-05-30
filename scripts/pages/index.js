//************FETCHING JSON DATA************//
async function getDataJson () {                                  
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

//************DISPLAYING PHOTOGRAPHER DATA************//
async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCard = photographerModel.getUserCard();
        photographersSection.appendChild(userCard);
    });
};

//************FETCH PHOTOGRAPHER DATA************//
async function init() {
    const { photographers } = await getDataJson();
    displayData(photographers);
};

init();
