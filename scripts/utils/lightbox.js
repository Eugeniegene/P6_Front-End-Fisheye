const media = document.getElementsByClassName('media_display_lightbox');
const lightbox =  document.getElementById("lightbox");
const rightArrow = document.getElementById('next');
const leftArrow = document.getElementById("previous");

function lightboxMediaOpen(){
  lightbox.style.display = "flex";
  return lightbox;
}

//************Close lightbox section************//
const closeBtn = document.querySelector(".lightbox_close");
document.addEventListener("keydown", keydown, false);

function closeLightbox() {
  lightbox.style.display = "none";
}

closeBtn.onclick = function(){
    closeLightbox();
}

//************Previous and next button created************//

const previousMedia = (count) => {
  count = count - 1;
  displayVideoImage(count);
}

const nextMedia = (count) => {
count++;
displayVideoImage(count);
} 

//************Right button lightbox section************//
rightArrow.addEventListener("click", nextBtn, false);
leftArrow.addEventListener("click", previousBtn, false);

async function previousBtn(){
  const positionMedia = lightbox.getAttribute("position");
    previousMedia(positionMedia);
}

async function nextBtn(){
  const positionMedia = lightbox.getAttribute("position");
  nextMedia(positionMedia);
}

//************Lightbox display media and images function************//
function displayVideoImage(count){
  if(photographerMedias.length > count && count >= 0){
    if(photographerMedias[count].image){
      const img = document.getElementById("lightbox_image_photographer");
      img.style.display="block";
      img.setAttribute("tabindex", "4");
      img.setAttribute("src", `assets/photographers/${photographerMedias[count].photographerId}/${photographerMedias[count].image}`);
      const video_lightbox = document.getElementById("lightbox_video_photographer");
      video_lightbox.style.display = "none";
    } else if (photographerMedias[count].video){
      const video = document.getElementById("lightbox_video_photographer");
      video.style.display="block";
      video.setAttribute("tabindex", "4");
      video.setAttribute("src", `assets/photographers/${photographerMedias[count].photographerId}/${photographerMedias[count].video}`);
      const image_lightbox = document.getElementById("lightbox_image_photographer");
      image_lightbox.style.display = "none";
    }
    const pictureTitle = document.getElementById('lightbox_title');
    pictureTitle.textContent=photographerMedias[count].title;
    lightbox.setAttribute("position",count);
  }
}

function keydown(e) {
  if (e.keyCode == 27) {
    closeLightbox();
  }
  if(e.keyCode == 37) {
    previousBtn();
  }
  if (e.keyCode == 39) {
    nextBtn();
  }
  //if (e.keyCode == 13){
    //lightboxMediaOpen();
  //}
}
