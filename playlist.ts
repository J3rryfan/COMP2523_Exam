// Playlists have a name -> needs getter and setter
// Playlists have a list of songs -> needs getter and setter

// Playlists have an addAlbum method which takes an album and extracts all
// the songs from that Album. It takes those songs and adds them to the
// list of songs. 

import { Album } from "./album";
import { Song } from "./song";
import { User } from "./user";
import { IImportable } from "./playlistimporter";

export class Playlists {
    private _name: string;
    private _songs: string[];
    
    constructor(name: string, songs: string[]) {
        this._name = name;
        this._songs = songs;
    }

    get name () {
        return this._name;
    }


    get listOfSongs () {
        return this._songs;
    }

    set name (name: string) {
        this._name = name;
    }

    set listOfSongs (songs: string[]) {
        this._songs = songs;
    }

    // Playlists have an addAlbum method which takes an album and extracts all
    // the songs from that Album. It takes those songs and adds them to the
    // list of songs. 

    addAlbum (album: string): void {
        this._songs = this._songs.concat(album);
    }


    generateStatement(filePath: string, port: IImportable) {
        let statement = port.loadPlaylist(filePath);
        // should do something with statement
    };


    
}