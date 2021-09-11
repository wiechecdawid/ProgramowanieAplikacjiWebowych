import { AppStorage } from "../app/app-storage"
import { Note } from "../entities/note"

export class Notes {
    private storage: AppStorage

    constructor() {
        this.storage = new AppStorage()
    }

    getAll = () => this.storage.retrieveAll().sort( (a: Note, b: Note) => b.timestamp - a.timestamp )

    get = ( id: string ) => this.storage.retrieveAll().find( (note) => { note.id === id } )

    add = ( note: Note ) => {
        const notes = [ ...this.storage.retrieveAll(), note]
        this.storage.saveAll(notes)
    }
    
    remove = ( note: Note ) => {
        const notes = this.storage.retrieveAll().filter( (element) => element !== note )
        this.storage.saveAll(notes)
    }

    update = ( id: string, note: Note ) => {
        let notes = this.storage.retrieveAll();
        const oldNote = notes.find( (element) => element.id === id )
        const newNote: Note = { id: id, ...note }

        const newNotes = notes.splice(notes.indexOf(oldNote), 1, newNote)
        this.storage.saveAll(newNotes)
    }
}