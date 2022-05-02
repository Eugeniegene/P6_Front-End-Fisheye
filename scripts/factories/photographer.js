function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data;

    const picture = `assets/photographers/idPortrait/${portrait}`;
    const pageLink = "photographer.html?id=" + id;

    function getUserCard() {
        console.log(getUserCard);
        const article = document.createElement( 'article' );/*création d'un article*/
        const urlPhotographer = document.createElement( 'a' );/*creation d'un lien*/
        urlPhotographer.setAttribute("href", pageLink) /*la fonction va renvoyer un lien vers la page du photographe selectionné A UPDATER*/ 
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const h3 = document.createElement( 'h3' );
        h3.textContent = city + ", " + country;
        const p01 = document.createElement( 'p' );
        p01.textContent = tagline;
        const p02 = document.createElement( 'p' );
        p02.textContent = price + "€/jour";
        p02.className = 'price';
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(p01);
        article.appendChild(p02);

        return (article);
    }
    return { name, picture, getUserCard }
}
