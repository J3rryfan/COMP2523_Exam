import { IImportable } from "./playlistimporter";
import { User } from "./user";


//
// CloudImporter: takes a url string to a playlist from youtube. For this one, to keep things simple, 
// just pass any youtube url of your choice, and return a fake playlist that you manually create yourself. (
//     Ex - let pl = new Playlist(”cool songs”);  pl.addAlbum(new Album(etc))) return pl )

export class CloudImporter implements IImportable {

    //print: "Importing playlist from <YOUR URL>"
    // Create and return a fake Playlist of your choice. 

    url: string;
    
    constructor(url: string) {
        this.url = url;
    }
    loadPlaylist(playlistName: string): void {
        let url = "https://www.youtube.com/";
        console.log("Importing playlist from " + url);
    }
    
}