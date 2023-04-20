export class Apod {
    private _date!: string;
    private _explanation!: string;
    private _hdUrl?: string;
    private _mediaType!: string;
    private _serviceVersion!: string;
    private _title!: string;
    private _url!: string;

    constructor(json?: any) { 
        if (json !== undefined) {
            this.date = json.date;
            this.explanation = json.explanation;
            this.hdUrl = json.hdurl;
            this.mediaType = json.media_type;
            this.serviceVersion = json.service_version;
            this.title = json.title;
            this.url = json.url;
        }
    }

    get date() {
        return this._date;
    }

    set date(value) {
        if (value === undefined) {
            throw new Error('date cannot be undefined');
        }
        this._date = value;
    }

    get explanation() {
        return this._explanation;
    }

    set explanation(value) {
        if (value === undefined) {
            throw new Error('explanation cannot be undefined');
        }
        this._explanation = value;
    }

    get hdUrl() {
        return this._hdUrl;
    }

    set hdUrl(value) {
        this._hdUrl = value;
    }

    get mediaType() {
        return this._mediaType;
    }

    set mediaType(value) {
        if (value === undefined) {
            throw new Error('mediaType cannot be undefined');
        }
        this._mediaType = value;
    }

    get serviceVersion() {
        return this._serviceVersion;
    }

    set serviceVersion(value) {
        this._serviceVersion = value;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (value === undefined) {
            throw new Error('title cannot be undefined');
        }
        this._title = value;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        if (value === undefined) {
            throw new Error('url cannot be undefined');
        }
        this._url = value;
    }

    public toJson() {
        return {
            date: this.date,
            explanation: this.explanation,
            hdurl: this.hdUrl,
            media_type: this.mediaType,
            service_version: this.serviceVersion,
            title: this.title,
            url: this.url
        };
    }

    public toString() {
        return JSON.stringify(this.toJson());
    }
}