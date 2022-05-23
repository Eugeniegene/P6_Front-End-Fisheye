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
        const informationsupp = photographerModel.informationsupp();
        photographersSection.appendChild(displayPhotographerData);
        let all_likes = 0;
        let i = 0;
        medias.forEach((media)=> {
            if(iDPhotographer == media.photographerId){
            const modelMedia = mediaListFactory(media);
            const mediasCardDOM = modelMedia.mediasCardDOM();
            photographersMedia.appendChild(mediasCardDOM);
            all_likes += media.likes;
            }
        });
        const all_likesElement = document.getElementById("all-likes");
        all_likesElement.innerHTML= all_likes;
        }
    });
    likeClick();
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

const menuSelect = document.getElementById("searcher-box");
menuSelect.addEventListener("change",async function (e) {
    const {media} = await getMedia();
    displayDataMedia(media,iDPhotographerStart, e.target.value);
});

init(iDPhotographerStart);
