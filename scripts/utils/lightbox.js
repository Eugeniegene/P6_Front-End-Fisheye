const closeBtn = document.querySelector(".lightbox_close");//bouton fermeture formulaire 

function lightboxMediaOpen(){
    document.getElementById("lightbox").style.display = "block";
}

closeBtn.onclick = function(){
    document.getElementById("lightbox").style.display = "none";
}

const leftArrow = document.getElementById('previous');
const rightArrow = document.getElementById('next');

const previousMedia = () => {
    count = count - 1;
    media = medias[count];

    if (!media) {
      count = medias.length - 1;
      media = medias[count];
    }
}

//document.onkeydown = keyboardNav();

 handleKeyboard = (event) => {
    const key = event.key;
    if (key === 'ArrowRight') {
      rightArrow.focus();
      nextMedia();
    } else if (key === 'ArrowLeft') {
      previousMedia();
      leftArrow.focus();
    } else if (key === 'Escape') {
      lightBoxCloseButton.focus();
      hideLightbox();
    }
  };

  document.addEventListener('keydown', handleKeyboard);

function initPictureEvent()
{
    const pictures = document.querySelectorAll("img");
    console.log('photo' + pictures);
    pictures.forEach(e => {
        e.addEventListener("click", function(){
            document.getElementById("lightbox").style.display = "block";
            const img = document.getElementById("lightbox_image_photographer");
            img.setAttribute("tabindex", "4");
           
            const pictureTitle = document.getElementById('lightbox_title');
            /************** A MODIFIER   */

        })
    })
}

