import { Notes } from "../collections/notes"
import Seeder from "../collections/test-notes-seeder"
import { Note } from "../entities/note"
import { ColorsEnum } from "../enums/colors"
import { noteFormCreator } from "../elements/note-form-creator"
import NoteCreator from "../elements/note-creator"
import { AppStorage } from "../storage/app-storage"

export class App {
    private noteList: Notes
    private creator: NoteCreator

    constructor() {
        this.noteList = new Notes(new AppStorage)
        const seeder = new Seeder(this.noteList)
        this.creator = new NoteCreator(this.noteList)
        seeder.seed()
    }

    private noteSubmitHandler = (ev: MouseEvent) => {
        const button = ev.target as HTMLInputElement
        const form = button.parentElement as HTMLFormElement
        
        const title = document.querySelector('.input.input-title') as HTMLInputElement
        const content = document.querySelector('.input.input-content') as HTMLInputElement

        const color = document.querySelector('.select.select-color') as HTMLSelectElement

        const note = new Note(title.value, content.value, false, ColorsEnum[color.value as keyof typeof ColorsEnum])
        this.noteList.add(note)
    }

    private createForm = () => {
        const root = document.querySelector('.root')
        const form = noteFormCreator.create()

        const submit = form.lastChild.lastChild
        submit.addEventListener('click', this.noteSubmitHandler)       

        root.appendChild(form)
    }

    private createNoteElement = (note: Note) => this.creator.create(note)

    private render( notes: Note[], className: string ) {
        const root = document.querySelector('.root')
        const wrapper = document.createElement('div')
        wrapper.classList.add(className)
        root.appendChild(wrapper)

        const header = document.createElement('h1')
        header.classList.add('note-header')
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