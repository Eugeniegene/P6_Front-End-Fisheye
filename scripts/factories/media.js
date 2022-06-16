function mediaListFactory(data) {
  const {
    id, photographerId, title, image, video, likes, date,
  } = data;

  const mediasImages = `assets/photographers/${photographerId}/${image}`;
  const mediasVideos = `assets/photographers/${photographerId}/${video}`;

  //* ***********MEDIA AND PHOTOGRAPHER DATA DISPLAYED************//
  function mediasCardDOM(position) {
    const carteMedia = document.createElement('article');
    carteMedia.classList.add('carte_media');
    carteMedia.setAttribute('title', 'Cliquez ici pour ouvrir la lightbox');

    //* ***********LIGHTBOX DATA************//
    if ('video' in data) {
      const photoVideo = document.createElement('video');
      const source = document.createElement('source');
      photoVideo.addEventListener('play', async () => {
        // lightboxMediaOpen is defined in lightbox.js file
        // eslint-disable-next-line no-undef
        const lightbox = lightboxMediaOpen();
        const videoLightbox = document.getElementById('lightbox_video_photographer');
        videoLightbox.style.display = 'block';
        videoLightbox.setAttribute('tabindex', '4');
        videoLightbox.setAttribute('src', mediasVideos);
        lightbox.setAttribute('position', position);
        const pictureTitle = document.getElementById('lightbox_title');
        pictureTitle.textContent = title;

        const imageLightbox = document.getElementById('lightbox_image_photographer');
        imageLightbox.style.display = 'none';
      });

      photoVideo.setAttribute('tabindex', '4');
      photoVideo.setAttribute('controls', ' ');
      source.className = mediasVideos;
      source.setAttribute('src', mediasVideos);
      source.setAttribute('alt', mediasVideos);
      source.setAttribute('type', 'video/mp4');

      photoVideo.appendChild(source);
      carteMedia.appendChild(photoVideo);
    } else {
      const img = document.createElement('img');
      img.addEventListener('click', () => {
        // lightboxMediaOpen is defined in lightbox.js file
        // eslint-disable-next-line no-undef
        const lightbox = lightboxMediaOpen();
        const imgLightbox = document.getElementById('lightbox_image_photographer');
        imgLightbox.setAttribute('tabindex', '4');
        imgLightbox.setAttribute('src', mediasImages);
        lightbox.setAttribute('position', position);
        imgLightbox.style.display = 'block';
        const pictureTitle = document.getElementById('lightbox_title');
        pictureTitle.textContent = title;
        const videoLightbox = document.getElementById('lightbox_video_photographer');
        videoLightbox.style.display = 'none';
      });
      img.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
        // lightboxMediaOpen is defined in lightbox.js file
        // eslint-disable-next-line no-undef
          const lightbox = lightboxMediaOpen();
          const imgLightbox = document.getElementById('lightbox_image_photographer');
          imgLightbox.setAttribute('tabindex', '4');
          imgLightbox.setAttribute('src', mediasImages);
          lightbox.setAttribute('position', position);
          imgLightbox.style.display = 'block';
          const pictureTitle = document.getElementById('lightbox_title');
          pictureTitle.textContent = title;

          const videoLightbox = document.getElementById('lightbox_video_photographer');
          videoLightbox.style.display = 'none';
        }
      });
      img.setAttribute('tabindex', '4');
      img.setAttribute('src', mediasImages);
      img.setAttribute('alt', 'photo', ` ${title}`);
      img.className = 'mediaImg';

      carteMedia.appendChild(img);
    }
    //* ********************************************//
    const infoPhoto = document.createElement('div');
    const h2 = document.createElement('h2');
    const nbreLike = document.createElement('span');
    const spanLike = document.createElement('span');
    const like = document.createElement('i');

    infoPhoto.classList.add('info_photo');
    h2.textContent = title;
    nbreLike.textContent = likes;
    nbreLike.className = 'title_nbr';
    nbreLike.setAttribute('title_nbr', 'nombre de like');
    spanLike.className = 'heart';
    like.className = 'fas fa-heart fa-lg';
    like.setAttribute('aria-label', 'icone coeur cliquable');
    like.setAttribute('tabindex', '4');

    spanLike.appendChild(like);
    infoPhoto.appendChild(h2);
    infoPhoto.appendChild(nbreLike);
    infoPhoto.appendChild(spanLike);
    carteMedia.appendChild(infoPhoto);

    return carteMedia;
  }
  return {
    id, photographerId, date, likes, title, image, video, mediasCardDOM,
  };
}
mediaListFactory();
