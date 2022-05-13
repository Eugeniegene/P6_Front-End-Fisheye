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

async function getMedia () {                                  //récupération du JSON
    const response = await fetch ("data/photographers.json");
    const media = await response.json();
    return media;
}

async function displayData(photographers, medias, iDPhotographer) {
    const photographersSection = document.querySelector(".photograph-header");
    const photographersMedia = document.querySelector(".photograph-media");

    photographers.forEach((photographer) => {
        if(iDPhotographer == photographer.id){
            
        const photographerModel = photographerFactory(photographer);
        const displayPhotographerData = photographerModel.displayPhotographerData();
        photographersSection.appendChild(displayPhotographerData);
        medias.forEach((media)=> {
            if(iDPhotographer == media.photographerId){
            const modelMedia = mediaListFactory(media);
            console.log(modelMedia);
            const mediasCardDOM = modelMedia.mediasCardDOM();
            photographersMedia.appendChild(mediasCardDOM);
            }
        });
        
        }
    });
};


async function init(iDPhotographer) {
    // Récupère les datas du photographe
    const { photographers } = await getPhotographers();
    const { media } = await getMedia();
    displayData(photographers, media, iDPhotographer);
};


const url = window.location.href;
const urlArray = url.split('?');
const iDPhotographerStart = urlArray[urlArray.length-1];

init(iDPhotographerStart);
