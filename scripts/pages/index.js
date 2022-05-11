async function getPhotographers () {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCard = photographerModel.getUserCard();
        photographersSection.appendChild(userCard);
    });
};

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();
