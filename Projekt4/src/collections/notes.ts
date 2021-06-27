import { AppStorage } from "../appStorage"
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
}