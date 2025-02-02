// photographerFactory is defined in index.js file
// eslint-disable-next-line no-unused-vars
function photographerFactory(data) {
  const {
    name,
    id,
    city,
    country,
    tagline,
    price,
    portrait,
  } = data;

  const picture = `assets/photographers/idPortrait/${portrait}`;
  const alt = `Portrait de ${name}`;

  //* ***********USER CARD CREATED ************//
  //* All data regarding selected photographer will be selected from
  //* their id, creating their inital card on the main page//

  function getUserCard() {
    const article = document.createElement('article');

    const urlPhotographer = document.createElement('a');
    urlPhotographer.classList.add('photographer-head');
    urlPhotographer.setAttribute('id', id);
    urlPhotographer.setAttribute('title', name);
    urlPhotographer.setAttribute('href', `photographer.html?${id}`);

    const urlPhotographerImg = document.createElement('div');
    urlPhotographerImg.classList.add('photographer-head-img');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('role', 'img');
    img.setAttribute('alt', alt);

    const nom = document.createElement('h2');
    nom.textContent = name;

    const location = document.createElement('h3');
    location.textContent = `${city}, ${country}`;

    const citation = document.createElement('p');
    citation.textContent = tagline;

    const prix = document.createElement('p');
    prix.textContent = `${price}€/jour`;
    prix.className = 'price';

    //* APPEND SECTION
    article.appendChild(urlPhotographer);
    urlPhotographer.appendChild(img);
    urlPhotographer.appendChild(nom);
    urlPhotographer.appendChild(location);
    urlPhotographer.appendChild(citation);
    urlPhotographer.appendChild(prix);

    return (article);
  }

  //* ***********ALL PHOTOGRAPHER ON PHOTOGRAPHER PAGE************//
  //* The following information will be available by clicking on a card
  //* that will display all photographer data//
  function displayPhotographerData() {
    const photographerData = document.createElement('div');

    const img = document.createElement('img');
    img.setAttribute('src', picture);
    img.setAttribute('role', 'img');
    img.setAttribute('alt', alt);
    img.setAttribute('id', 'portraitPicture');

    const nom = document.createElement('h2');
    nom.textContent = name;
    nom.setAttribute('name', nom);

    const location = document.createElement('h3');
    location.textContent = `${city}, ${country}`;
    location.setAttribute('location', location);

    const citation = document.createElement('p');
    citation.textContent = tagline;
    citation.className = 'tagline';

    photographerData.appendChild(img);
    photographerData.appendChild(nom);
    photographerData.appendChild(location);
    photographerData.appendChild(citation);

    document.getElementById('contact_modal-photographer-name').innerHTML = `${document.getElementById('contact_modal-photographer-name').innerHTML}<br/>${data.name}`;

    return photographerData;
  }

  //* ***********BOTTOM BANNER WITH ALL LIKES AND PRICE/DAY************//
  function informationsupp() {
    const informationSuppl = document.querySelector('.informationsupp');
    const like = document.createElement('h4');
    const emoji = document.createElement('i');
    const prix = document.createElement('h4');

    like.id = 'all-likes';
    emoji.className = 'fas fa-heart fa-lg';
    prix.textContent = `${price}€/jour`;
    prix.id = 'prix';

    informationSuppl.appendChild(like);
    informationSuppl.appendChild(emoji);
    informationSuppl.appendChild(prix);
  }

  return {
    name, picture, getUserCard, displayPhotographerData, informationsupp,
  };
}
