import { Notes } from "../collections/notes"
import Seeder from "../collections/test-notes-seeder"
import { Note } from "../entities/note"
import { ColorsEnum } from "../enums/colors"
import { controllsCreator } from "../helpers/controlls-creator"
import { noteFormCreator } from "../helpers/note-form-creator"

export class App {
    private noteList: Notes

    constructor() {
        const seeder = new Seeder()
        seeder.seed()

        this.noteList = new Notes()
    }

    private createForm = () => {
        const root = document.querySelector('.root')
        const form = noteFormCreator.create()

        root.appendChild(form)
    }

    private createNoteElement = (note: Note) => {
        // const controlls = document.createElement('div')
        // controlls.classList.add('note-controlls')
        const controlls = controllsCreator.createControlls()

        const title = document.createElement('div')
        title.className = 'title'
        title.innerText = note.title

        const content = document.createElement('div')
        content.className = 'content'
        content.innerText = note.content

        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.classList.add(`note-${ColorsEnum[note.color]}`)
        noteElement.append(controlls, title, content)

        return noteElement
    }

    private render( notes: Note[], className: string ) {
        const root = document.querySelector('.root')
        const wrapper = document.createElement('div')
        wrapper.classList.add(className)
        root.appendChild(wrapper)

        const header = document.createElement('h1')
        header.classList.add('header')
        header.innerText = className === 'pinned' ? 'Przypięte:' : 'Pozostałe:'
        wrapper.appendChild(header)

        const notesContainer = document.createElement('div')
        notesContainer.classList.add('notes-container')
        
        const noteElements = notes.map( note => this.createNoteElement(note))

        notesContainer.append( ...noteElements )
        wrapper.appendChild(notesContainer)
    }

    private renderPinned = () => this.render( this.noteList.getAll().filter( note => note.isPinned ), 'pinned' )

    private renderRemaining = () => this.render( this.noteList.getAll().filter( note => !note.isPinned ), 'unpinned' )


    start = () => {
        this.createForm()
        this.renderPinned()
        this.renderRemaining()
    }
}