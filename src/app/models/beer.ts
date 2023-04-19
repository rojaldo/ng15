export class Beer {

    private _id: number = 0;
    private _name: string = '';
    private _tagline: string = '';
    private _description: string = '';
    private _imageUrl: string = '';
    private _abv: number = 0;

    constructor(json: any){
        this.id = json.id;
        this.name = json.name;
        this.tagline = json.tagline;
        this.description = json.description;
        this.imageUrl = json.image_url;
        this.abv = json.abv;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get tagline() {
        return this._tagline;
    }

    set tagline(value) {
        this._tagline = value;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get imageUrl() {
        return this._imageUrl;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }

    get abv() {
        return this._abv;
    }

    set abv(value) {
        this._abv = value;
    }
}
