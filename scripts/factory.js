class Photograph {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.portrait = data.portrait;
        this.city = data.city;
        this.country = data.country;
        this.tagline = data.tagline;
        this.price = data.price;
    }
}

class Media {
    constructor(data) {
        this.id = data.id;
        this.image = data.image;
        this.video = data.video;
        this.title = data.title;
        this.date = data.date;
        this.likes = data.likes;
    }
}