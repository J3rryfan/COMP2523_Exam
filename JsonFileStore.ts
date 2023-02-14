import { IImportable } from "./playlistimporter";
import { User } from "./user";


class JsonFileStore implements IImportable {
    loadPlaylist(playlistName: string): void {
        console.log("Loading playlist from JSON file...");
    }
}