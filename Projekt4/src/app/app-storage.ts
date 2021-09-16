import { Note } from "../entities/note";
import { IAppStorage } from "../interfaces/IAppStorage";

export class AppStorage implements IAppStorage {
    private notes: Note[];
    
    constructor() {
        this.notes = JSON.parse(localStorage.getItem('notes'))

        if( this.notes === null )
            this.notes = []
    }

    add = ( note: Note) => {
        this.notes.push(note)
        this.saveAll(this.notes)
    }

    saveAll = ( notes: Note[] ) => {
        this.notes = notes
        localStorage.setItem('notes', JSON.stringify(this.notes)) 
    }

    read = ( id: string ) => this.notes.find(note => note.id === id)

    readAll = () => this.notes.sort( (a: Note, b: Note) => 
        b.timestamp - a.timestamp
    )

    delete = ( note: Note ) => {
        this.notes = this.notes.filter( (element) => element !== note )
        this.saveAll(this.notes)
    }

    update = ( id: string, note: Note ) => {
        const oldNote = this.notes.find(element => element.id === id)
        const newNote = { ...note, id: id } as Note

        this.notes.splice(this.notes.indexOf(oldNote), 1, newNote)
        this.saveAll(this.notes)
    }
}