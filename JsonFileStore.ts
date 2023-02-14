import { IImportable } from "./playlistimporter";
import { User } from "./user";
import { readFileSync } from "fs";



class JsonFileStore implements IImportable {
    database: "data.json"


    loadPlaylist(playlistName: string): void {
        let database = JSON.parse(
            readFileSync(this.database, "utf8")

        );
        let playlist = database[playlistName];
        console.log("Loading playlist from JSON file..." + playlist);
    }
}