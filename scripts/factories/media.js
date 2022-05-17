function mediaListFactory(data) {
    const { id, photographerId, title, image, video, likes, date } = data;

    const mediasImages = `assets/photographers/${photographerId}/${image}`;
    console.log(mediasImages);
    const mediasVideos = `assets/photographers/${photographerId}/${video}`;
    console.log(mediasVideos);

    /********************NOUVEAU TEST******************* */
    function mediasCardDOM() {
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");
        carteMedia.setAttribute("title", "Permet d'ouvrir une lightbox");
        
        if("video" in data){
            const photoVideo = document.createElement("video");
            const source = document.createElement("source");

            photoVideo.setAttribute("tabindex", "4");
            photoVideo.setAttribute("controls", " ");
            source.className = "mediaImg";
            source.setAttribute("src",mediasVideos);
            source.setAttribute("alt", mediasVideos);
            source.setAttribute("type", "video/mp4");

            carteMedia.appendChild(photoVideo);
            photoVideo.appendChild(source);
        }
        else {
            const img = document.createElement( "img" );
            img.setAttribute("tabindex", "4");
            img.setAttribute("src",mediasImages);
            img.setAttribute("alt", "photo" + " " +title);
            img.className = "mediaImg";

            carteMedia.appendChild(img);
        }

        const infoPhoto = document.createElement("div");
        const h2 = document.createElement( "h2" );
        const nbreLike = document.createElement("span");
        const spanLike = document.createElement("span");
        const like = document.createElement("i");

        infoPhoto.classList.add("info_photo");
        h2.textContent = title;
        nbreLike.textContent = likes;
        nbreLike.className = "title_nbr";
        nbreLike.setAttribute("title_nbr", "nombre de like");
        spanLike.className = "heart";
        like.className = "fas fa-heart fa-lg";
        like.setAttribute("aria-label", "icone coeur cliquable");
        like.setAttribute("tabindex", "4");

        spanLike.appendChild(like);
        infoPhoto.appendChild(h2);
        infoPhoto.appendChild(nbreLike);
        infoPhoto.appendChild(spanLike);
        carteMedia.appendChild(infoPhoto);

        return carteMedia;
    }
    return { id, date, likes, title, image, video, mediasCardDOM }
}

async function getPhotographers () {                                  d
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}