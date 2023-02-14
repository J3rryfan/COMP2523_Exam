// Albums have a title -> needs getter and setter
// Albums have an Artist they belong to
// Albums have a year they were released
// Albums have tracks (songs)

// We can add a track to an album
import { User } from "./user";

export class Album {
    private _title: string;
    private _artist: string;
    private _year: number;
    private _tracks: string[];

    constructor(title: string, artist: string, year: number, tracks: string[]) {
        this._title = title;
        this._artist = artist;
        this._year = year;
        this._tracks = tracks;
    }

    get title() {
        return this._title;
    }

    get artist() {
        return this._artist;
    }

    get year() {
        return this._year;
    }

    get tracks() {
        return this._tracks;
    }


    // need  a setter for title
    set title(title: string) {
        this._title = title;
    }
   
    // We can add a track to an album
    addTrack(track: string) {
        this._tracks.push(track);
    }


}