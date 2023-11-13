// Affichage Card user detail
function detailUserTemplate(data) {
    const photograph = new Photograph(data);

    const picture = `assets/photographers/${photograph.portrait}`;

    function getDetailDOM() {
        const article = document.createElement('article');

        const div = document.createElement('div');
        div.classList.add('cardUser-text');

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute("alt", photograph.name);

        const h1 = document.createElement( 'h1' );
        h1.classList.add('title-name');
        h1.textContent = photograph.name;

        const pZone = document.createElement('p');
        pZone.classList.add('text-zone');
        pZone.textContent = photograph.city +', '+ photograph.country;

        const pTagline = document.createElement('p');
        pTagline.classList.add('text-tag');
        pTagline.textContent = photograph.tagline;

        article.appendChild(img);
        div.appendChild(h1);
        div.appendChild(pZone);
        div.appendChild(pTagline);
        article.appendChild(div)
        return (article);
    }
    return { name, picture, getDetailDOM }
}

// Affichage média
function detailMediaTemplate(data, index) {
    const media = new Media(data);

    const picture = `assets/media/${media.image}`;
    const movie = `assets/media/${media.video}`;
    const urlLike = 'assets/icons/like.svg';

    function getMediaDOM() {

        const div = document.createElement('div');
        div.classList.add('cardMedia');
        div.setAttribute("alt", "show img " + media.title );

        const button = document.createElement('button');
        button.classList.add('button-card');
        button.setAttribute("onclick", 'lightboxDialog.showModal(); slide('+index+')');


        const img = document.createElement( 'img' );
        const mp4 = document.createElement( 'video' );

        if (media.image) {
            img.setAttribute("src", picture);
            img.setAttribute("alt", media.title);
        } else {
            mp4.setAttribute("alt", media.title);
            mp4.src = movie;
            mp4.autoplay = false;
            mp4.controls = true;
            mp4.height = 350;
            mp4.width = 350;
        }

        const divText = document.createElement('div');
        divText.classList.add('textMedia');

        const h2 = document.createElement( 'h2' );
        h2.textContent = media.title;

        const divLike = document.createElement('div');
        divLike.classList.add('like-container');

        const p = document.createElement('p');
        p.classList.add('text-like');
        p.textContent = media.likes;

        const icon = document.createElement('img');
        icon.setAttribute("src", urlLike);
        icon.setAttribute("alt", "likes");
        icon.setAttribute('onclick', 'addLikes(this)');
        icon.classList.add('like-icon');

        if (media.image) {
            button.appendChild(img);
        } else {
            button.appendChild(mp4);
        }
        div.appendChild(button);
        divLike.appendChild(p);
        divLike.appendChild(icon);
        divText.appendChild(h2);
        divText.appendChild(divLike);
        div.appendChild(divText);
        return (div);
    }
    return {getMediaDOM}
}

// Affichage case like et prix
function detailTemplate(totalLikes, tarif) {
    const photographersDetail = document.querySelector(".photograph-detail");
    const divLikes = document.createElement('div');
    const pLikes = document.createElement('p');
    const pTarif = document.createElement('p');
    const urlLike = 'assets/icons/like.svg';

    pLikes.textContent = totalLikes;
    pTarif.textContent = tarif + '€ / jour';

    const icon = document.createElement('img');
    icon.setAttribute("src", urlLike);
    icon.setAttribute("alt", "icon like");
    icon.classList.add('like-icon');

    divLikes.appendChild(pLikes);
    divLikes.appendChild(icon);
    photographersDetail.appendChild(divLikes);
    photographersDetail.appendChild(pTarif);
}