// create a user 
import { Artist } from './Artist';
import { Album } from './album';
import { Song } from './song';
import { Playlists } from "./playlist";
import { IImportable } from "./playlistimporter";



export class User {
    
    private _username: string;
    private _password: string;
    private _playlists: Playlists[];
    private _albums: Album[];

    constructor(username: string, password: string) {
        this._username = username;
        this._password = password;
        this._playlists = [];
        this._albums = [];
    }


    get username() {
        return this._username;
    };

    get password() {
        return this._password;
    }


    public Localimporter(filePath: string, port: IImportable){
        this._playlists.loadPlaylist(filePath, port);
    }

    // A user has an addPlaylist method to add a playlist to the user's playlists.
    addPlaylist(playlist: string) {
        this._playlists.push(playlist);
        
    }

    addAlbum( album: string){
        this.album.addTracks(album);
         
    }


    get song () { 
        return this.song.title;
    }


    get album(){
        return this._albums;
    }

    get playlist(){
        return this._playlists;
    }


    // A user has an addPlaylist method to add a playlist to the user's playlists.
    // addPlaylist (playlist: string) {
    //     this._playlists.push(playlist);

    // }


};