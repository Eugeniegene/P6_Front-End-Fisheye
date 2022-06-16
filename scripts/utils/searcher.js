let photographerMedias = [];

function displayPhotographerMedia(medias, photographerId) {
  const photographersMedia = document.querySelector('.photograph-media');
  photographersMedia.innerHTML = ' ';
  let allLikes = 0;
  let position = 0;
  photographerMedias = [];
  const allLikesElement = document.getElementById('all-likes');
  medias.forEach((media) => {
    if (media.photographerId === Number(photographerId)) {
      // mediaListFactory is defined in media.js
      // eslint-disable-next-line no-undef
      const mediaModel = mediaListFactory(media);
      const userMediaDOM = mediaModel.mediasCardDOM(position);
      photographersMedia.appendChild(userMediaDOM);
      allLikes += media.likes;
      photographerMedias.push(mediaModel);
      position += 1;
    }
  });
  allLikesElement.innerHTML = allLikes;
}

//* ***********MEDIA SORTER FUNCTION BY NAME************//

function heartElement(e) {
  if (!e.classList.contains('isClicked')) {
    e.classList.add('isClicked');
    const nbreLike = e.parentElement.children[1];
    const textNumberMedia = Number(nbreLike.textContent) + 1;
    nbreLike.textContent = textNumberMedia;

    const allLikes = document.getElementById('all-likes');
    const textNumberBanner = Number(allLikes.textContent) + 1;
    allLikes.textContent = textNumberBanner;
  }
}
//* ***********LIKE FUNCTION************//
function likeClick() {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((e) => {
    e.addEventListener('click', () => {
      heartElement(e);
    });
    e.addEventListener('keydown', (event) => {
      if (event.keyCode === 13) {
        heartElement(e);
      }
    });
  });
}
// used in another file
// eslint-disable-next-line no-unused-vars
function displayDataMedia(medias, photographerId, value) {
  switch (value) {
    case 'populaire':
      medias.sort((a, b) => b.likes - a.likes);
      break;
    case 'date':
      medias.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case 'titre':
      medias.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      medias.sort((a, b) => b.likes - a.likes);
      break;
  }
  displayPhotographerMedia(medias, photographerId);
  likeClick();
}
