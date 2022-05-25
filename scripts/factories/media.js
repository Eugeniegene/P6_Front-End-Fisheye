function mediaListFactory(data) {
    const { id, photographerId, title, image, video, likes, date } = data;

    const mediasImages = `assets/photographers/${photographerId}/${image}`;
    const mediasVideos = `assets/photographers/${photographerId}/${video}`;

    /********************NOUVEAU TEST******************* */
    function mediasCardDOM() {
        
        const carteMedia = document.createElement("article");
        carteMedia.classList.add ("carte_media");
        carteMedia.setAttribute("title", "Ouverture lightbox");
        
        if("video" in data){
            const photoVideo = document.createElement("video");
            const source = document.createElement("source");
            photoVideo.addEventListener("play", async function(){
                console.log('toto');
                document.getElementById("lightbox").style.display = "block";
                const video = document.getElementById("lightbox_video_photographer");
                video.style.display="block";
                video.setAttribute("tabindex", "4");
                video.setAttribute("src",mediasVideos);
                console.log(video);
                const pictureTitle = document.getElementById('lightbox_title');
                pictureTitle.textContent=title;

                const image_lightbox = document.getElementById("lightbox_image_photographer");
                image_lightbox.style.display = "none";
            })

            photoVideo.setAttribute("tabindex", "4");
            photoVideo.setAttribute("controls", " ");
            source.className = mediasVideos;
            source.setAttribute("src",mediasVideos);
            source.setAttribute("alt", mediasVideos);
            source.setAttribute("type", "video/mp4");
            
            photoVideo.appendChild(source);
            carteMedia.appendChild(photoVideo);
            

        }
        else {
            const img = document.createElement( "img" );
            img.addEventListener("click", function(){
                document.getElementById("lightbox").style.display = "block";
                const img = document.getElementById("lightbox_image_photographer");
                img.setAttribute("tabindex", "4");
                img.setAttribute("src",mediasImages);
                img.style.display="block";
                const pictureTitle = document.getElementById('lightbox_title');
                pictureTitle.textContent=title;
                
                const video_lightbox = document.getElementById("lightbox_video_photographer");
                video_lightbox.style.display = "none";
            })
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

async function getPhotographers () {                                  
    const response = await fetch ("data/photographers.json");
    const photographers = await response.json();
    return photographers;
}
