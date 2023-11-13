// Affi che les photographes
function photographerTemplate(data) {

    const photograph = new Photograph(data);

    const picture = `assets/photographers/${photograph.portrait}`;

    function getUserCardDOM() {
        const a = document.createElement('a');
        a.setAttribute('href', "photographer.html?id=" + photograph.id);

        const article = document.createElement('article');
        article.setAttribute('aria-label', 'Lien vers la page de ' + photograph.name);

        const div = document.createElement('div');
        div.classList.add('card-text');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);

        const h2 = document.createElement( 'h2' );
        h2.classList.add('title-name');
        h2.textContent = photograph.name;

        const pZone = document.createElement('p');
        pZone.classList.add('text-zone');
        pZone.textContent = photograph.city +', '+ photograph.country;

        const pTagline = document.createElement('p');
        pTagline.classList.add('text-tag');
        pTagline.textContent = photograph.tagline;

        const pPrice = document.createElement('p');
        pPrice.classList.add('text-price');
        pPrice.textContent = photograph.price + '€/jour';

        article.appendChild(img);
        div.appendChild(h2);
        div.appendChild(pZone);
        div.appendChild(pTagline);
        div.appendChild(pPrice);
        article.appendChild(div);
        a.appendChild(article);
        return (a);
    }
    return { name, picture, getUserCardDOM }
}