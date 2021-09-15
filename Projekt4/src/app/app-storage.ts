import { Note } from "../entities/note";
import { IAppStorage } from "../interfaces/IAppStorage";

export class AppStorage implements IAppStorage {
    private notes: Note[];
    
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes'))

        if( this.notes === null )
            this.notes = []
    }

    saveAll = ( notes: Note[] ) => {
        this.notes = notes
        localStorage.setItem('notes', JSON.stringify(this.notes)) 
    }

    retrieveAll = () => this.notes
}