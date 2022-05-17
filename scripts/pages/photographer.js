//récupération du JSON - Photographers 
async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}

//récupération du JSON - MEDIAS
async function getMedia () {                                  
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
        const informationsupp = photographerModel.informationsupp();
        photographersSection.appendChild(displayPhotographerData);
        medias.forEach((media)=> {
            if(iDPhotographer == media.photographerId){
            const modelMedia = mediaListFactory(media);
            console.log(modelMedia);
            const mediasCardDOM = modelMedia.mediasCardDOM();
            photographersMedia.appendChild(mediasCardDOM);
            }
        });
        const displayDataMedia = photographerModel.displayDataMedia();
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
