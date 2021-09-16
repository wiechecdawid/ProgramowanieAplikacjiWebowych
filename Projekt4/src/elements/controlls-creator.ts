import { Notes } from "../collections/notes"
import { Note } from "../entities/note"
import { idRetriever } from "../helpers/id-retriever"

export default class ControllsCreator {
    notes: Notes
    constructor( notes: Notes) {
        this.notes = notes
    }
    createControlls = () => {
        const container = document.createElement('div')
        container.classList.add('note-controlls')

        const pinButton = document.createElement('button')
        pinButton.classList.add('button')
        pinButton.classList.add('pin-unpin-button')
        pinButton.innerText = 'Pin/Unpin'
        pinButton.addEventListener('click', this.pinHandler)

        const deleteButton = document.createElement('button')
        pinButton.classList.add('button')
        deleteButton.classList.add('note-delete-button')
        deleteButton.innerHTML = '&#10006'
        deleteButton.addEventListener('click', this.deleteHandler)

        container.append(pinButton, deleteButton)

        return container as HTMLDivElement
    }

    deleteHandler = ( ev: MouseEvent ) => {
        const button = ev.target as HTMLInputElement
        const noteElement = button.parentElement.parentElement
        const container = noteElement.parentElement
    
        const id = idRetriever.retrieve(noteElement.id)
        const noteObject = this.notes.get(id)
    
        this.notes.remove(noteObject)
        container.removeChild(noteElement)
    
        location.reload()
    }

    pinHandler = (ev: MouseEvent) => {
        const button = ev.target as HTMLInputElement
        const noteElement = button.parentElement.parentElement
    
        const id = idRetriever.retrieve(noteElement.id)
        const noteObject = this.notes.get(id)
    
        const pinned = noteObject.isPinned ? false : true
            
        this.notes.update(noteObject.id, {
            ...noteObject,
            isPinned: pinned
        } as Note)
    
        location.reload()
    }
}