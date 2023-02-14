import { IImportable } from "./playlistimporter";
import { User } from "./user";


class JsonFileStore implements IImportable {
    database: "data.json"; 


    loadPlaylist(playlistName: string): void {
        let database = JSON.parse("data.json");
        console.log("Loading playlist from JSON file...");
    }
}