function displayDataMedia(medias,photographerId, value) { 
    console.log(value);
    switch(value){       
            
        case "populaire" : // retournera les médias en fonction du nombre de likes
            medias.sort (function (a, b) {
                return b.likes - a.likes;
            })
            break;

        case "date" :// retournera les médias en fonction de leur date
            medias.sort (function (a, b) {
                return new Date(b.date) - new Date(a.date);
            })
            break;

        case "titre" : // retournera les médias en fonction de leur titre
            medias.sort (function (a, b) {
                return a.title.localeCompare (b.title);
            })
            break;
    } 

    const cartesMedias = document.querySelector(".photograph-media");
    console.log(cartesMedias);
    cartesMedias.innerHTML = "";

    let all_likes = 0;
    let i = 0;
    medias.forEach((media)=> {
        if (media.photographerId == photographerId){
            const mediaModel = mediaListFactory (media);
            const userMediaDOM = mediaModel.mediasCardDOM();
            cartesMedias.appendChild(userMediaDOM);

            all_likes += media.likes;
        }
    })
}
