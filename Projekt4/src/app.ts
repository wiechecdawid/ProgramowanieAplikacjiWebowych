import { Notes } from "./collections/notes"
import Seeder from "./collections/test-notes-seeder"
import { Note } from "./entities/note"

export class App {
    private noteList: Notes

    constructor() {
        this.noteList = new Notes()
    }

    createNoteElement = (note: Note) => {
        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = note.title

        const content = document.createElement('div')
        content.className = 'content'
        content.innerText = note.content

        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.classList.add(`${note.color}`)
        noteElement.style.backgroundColor = note.color.toString()
        noteElement.append(title, content)

        return noteElement
    }

    render( notes: Note[], className: string ) {
        const root = document.querySelector('.root')
        const wrapper = document.createElement('div')
        wrapper.classList.add(className)
        root.appendChild(wrapper)

        const noteElements = notes.map( note => this.createNoteElement(note) )
        wrapper.append( ...noteElements )
    }

    renderPinned = () => this.render( this.noteList.getAll().filter( note => note.isPinned ), 'pinned' )

    renderRemaining = () => this.render( this.noteList.getAll().filter( note => !note.isPinned ), 'unpinned' )

    start = () => {
        const seeder = new Seeder()
        seeder.seed()

        this.renderPinned()
        this.renderRemaining()
    }
}