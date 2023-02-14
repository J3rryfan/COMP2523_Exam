//A PlaylistImporter takes in its constructor an importer of type IImportable.

// A PlaylistImporter has an importPlaylist method that calls a loadPlaylist
// method from the importer. EVERY IMPORTER must have this method. 


export interface IImportable {
    // A PlaylistImporter has an importPlaylist method that calls a loadPlaylist method from the importer. 
    //EVERY IMPORTER must have this method.

    loadPlaylist(playlistName: string): void;


}