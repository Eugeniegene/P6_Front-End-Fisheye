function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const photographerID = document.createElement('photographer-ID');
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

async function getPhotographers () {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

async function displayData(photographers,iDPhotographer) {
    const photographersSection = document.querySelector(".photograph-header");

    photographers.forEach((photographer) => {
        if(iDPhotographer == photographer.id){
        const photographerModel = mediaListFactory(photographer);
        //const mediasCardDOM = photographerModel.mediasCardDOM();
        //photographersSection.appendChild(mediasCardDOM);
        const displayPhotographerData = photographerModel.displayPhotographerData();
        photographersSection.appendChild(displayPhotographerData);
        }
    });
};

async function init(iDPhotographer) {
    // Récupère les datas du photographe
    const { photographers } = await getPhotographers();
    displayData(photographers,iDPhotographer);
};
console.log(window.location.href);
const url = window.location.href;
const urlArray = url.split('?');
console.log(urlArray);
const iDPhotographerStart = urlArray[urlArray.length-1];
console.log(iDPhotographerStart);
init(iDPhotographerStart);

