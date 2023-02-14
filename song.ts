// Songs have a title -> needs getter and setter

export class Song {    
    // songs have a title -> needs getter and setter
    private _title: string;

    constructor(title: string) {
        this._title = title;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    // There should be a song method




}