function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/idPortrait/${portrait}`;
    const alt = `Portrait de ${name}`;
    const pageLink = "photographer.html?id=" + id;

    function getUserCard() {//création de l'élément, il comportera toutes les données du photographe sélectionné
        console.log(getUserCard);
        const article = document.createElement( 'article' );
        const urlPhotographer = document.createElement( 'a' );
        urlPhotographer.classList.add("photographer-head");
        urlPhotographer.setAttribute('id', id);
        urlPhotographer.setAttribute('title', name);
        urlPhotographer.setAttribute('href', `photographer.html?${id}`);

        const urlPhotographerImg = document.createElement('div');
        urlPhotographerImg.classList.add("photographer-head-img");

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('role', 'img');
        img.setAttribute('alt', alt);

        const nom = document.createElement( 'h2' );
        nom.textContent = name;

        const location = document.createElement( 'h3' );
        location.textContent = city + ", " + country;

        const citation = document.createElement( 'p' );
        citation.textContent = tagline;
        
        const prix = document.createElement( 'p' );
        prix.textContent = price + "€/jour";
        prix.className = 'price';

        const photographerTags = document.createElement( 'ul' );
        photographerTags.classList.add("photographerTags");

        //APPEND SECTION
        article.appendChild(urlPhotographer);
        urlPhotographer.appendChild(img);
        urlPhotographer.appendChild(nom);
        urlPhotographer.appendChild(location);
        urlPhotographer.appendChild(citation);
        urlPhotographer.appendChild(prix);

        return (article);
    }
    
    function displayPhotographerData() {
        console.log("displayPhotographerData");

        const photographerData = document.createElement('div');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('role', 'img');
        img.setAttribute('alt', alt);
        img.setAttribute('id','portraitPicture')

        const nom = document.createElement( 'h2' );
        nom.textContent = name;
        nom.setAttribute("name", nom)

        const location = document.createElement( 'h3' );
        location.textContent = city + ", " + country;
        location.setAttribute ("location", location)

        const citation = document.createElement( 'p' );
        citation.textContent = tagline;
        citation.className="tagline";

        photographerData.appendChild(img);
        photographerData.appendChild(nom);
        photographerData.appendChild(location);
        photographerData.appendChild(citation);;

        return photographerData;
    }
    return { name, picture, getUserCard, displayPhotographerData }
}
