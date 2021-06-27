import { Note } from "./entities/note";

interface IAppStorage {
    saveAll: ( notes: Note[] ) => void,
    retrieveAll: () => Note[]
}

export class AppStorage implements IAppStorage {
    private notes: Note[];
    
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes'))
    }

    saveAll = ( notes: Note[] ) => {
        this.notes = notes
        localStorage.setItem('notes', JSON.stringify(this.notes)) 
    }

    retrieveAll = () => this.notes
}