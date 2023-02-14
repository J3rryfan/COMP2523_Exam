// crate an Artist 
// Artist have a name
// Artist have albums
//  we can add an album 
import { User } from "./user";



export class Artist {
    name: string;
    albums: string[];

    constructor(name: string,) {
        this.name = name;
        this.albums = [];
    }


    get artistName() {
        return this.name;
    }

    addAlbum(album: string) {
        this.albums.push(album);
    }


}