function displayPhotographerMedia(medias, photographerId){
    photographersMedia.innerHTML = "";
    let all_likes = 0;
    let position = 0;
    photographerMedias = [];
    const all_likesElement = document.getElementById("all-likes");
    medias.forEach((media)=> {
        if (media.photographerId == photographerId){
            const mediaModel = mediaListFactory (media);
            const userMediaDOM = mediaModel.mediasCardDOM(position);
            photographersMedia.appendChild(userMediaDOM);
            all_likes += media.likes;
            photographerMedias.push(mediaModel);
            position++;
        }
    });
    all_likesElement.innerHTML= all_likes;
}

//************MEDIA SORTER FUNCTION BY NAME************//
function displayDataMedia(medias,photographerId, value) { 
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
    displayPhotographerMedia(medias, photographerId);
    likeClick();
} 

//************LIKE FUNCTION************//
function likeClick()
{
    const hearts = document.querySelectorAll(".heart");
    hearts.forEach(e => {
        e.addEventListener("click", function(){
            const nbreLike = e.parentElement.children[1];
            nbreLike.textContent++;
            let all_likes = document.getElementById("all-likes");
            all_likes.innerHTML++; 
            e.removeEventListener("click",arguments.callee);
        });
        e.addEventListener("keydown", function(){
            const nbreLike = e.parentElement.children[1];
            nbreLike.textContent++;
            let all_likes = document.getElementById("all-likes");
            all_likes.innerHTML++; 
            e.removeEventListener("keydown",arguments.callee);
        });
    });
}
