/* eslint-disable linebreak-style */
/* eslint-disable func-names */
/* eslint-disable no-caller */
/* eslint-disable default-case */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable no-undef */
function displayPhotographerMedia(medias, photographerId) {
  photographersMedia.innerHTML = ' ';
  let all_likes = 0;
  let position = 0;
  photographerMedias = [];
  const all_likesElement = document.getElementById('all-likes');
  medias.forEach((media) => {
    if (media.photographerId == photographerId) {
      const mediaModel = mediaListFactory(media);
      const userMediaDOM = mediaModel.mediasCardDOM(position);
      photographersMedia.appendChild(userMediaDOM);
      all_likes += media.likes;
      photographerMedias.push(mediaModel);
      position++;
    }
  });
  all_likesElement.innerHTML = all_likes;
}

//* ***********MEDIA SORTER FUNCTION BY NAME************//
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
  }
  displayPhotographerMedia(medias, photographerId);
  likeClick();
}
//* ***********LIKE FUNCTION************//
function likeClick() {
  const hearts = document.querySelectorAll('.heart');
  hearts.forEach((e) => {
    e.addEventListener('click', function () {
      const nbreLike = e.parentElement.children[1];
      nbreLike.textContent++;
      let all_likes = document.getElementById('all-likes');
      all_likes.innerHTML++;
      // eslint-disable-next-line no-restricted-properties
      e.removeEventListener('click', arguments.callee);
    });
    e.addEventListener('keydown', function (event) {
      if (event.keyCode == 13) {
        const nbreLike = e.parentElement.children[1];
        nbreLike.textContent++;
        let all_likes = document.getElementById('all-likes');
        all_likes.innerHTML++;
        // eslint-disable-next-line no-restricted-properties
        e.removeEventListener('keydown', arguments.callee);
      }
    });
  });
}
