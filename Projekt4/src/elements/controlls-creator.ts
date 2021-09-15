import { Notes } from "../collections/notes"
import { Note } from "../entities/note"
import { idRetriever } from "../helpers/id-retriever"

export const controllsCreator = {
    createControlls: () => {
        const container = document.createElement('div')
        container.classList.add('note-controlls')

        const pinButton = document.createElement('button')
        pinButton.classList.add('button')
        pinButton.classList.add('pin-unpin-button')
        pinButton.innerText = 'Pin/Unpin'
        pinButton.addEventListener('click', pinHandler)

        const deleteButton = document.createElement('button')
        pinButton.classList.add('button')
        deleteButton.classList.add('note-delete-button')
        deleteButton.innerHTML = '&#10006'
        deleteButton.addEventListener('click', deleteHandler)

        container.append(pinButton, deleteButton)

        return container as HTMLDivElement
    }
}

function deleteHandler(ev: MouseEvent) {
    const button = ev.target as HTMLInputElement
    const noteElement = button.parentElement.parentElement
    const container = noteElement.parentElement

    const id = idRetriever.retrieve(noteElement.id)
    const notesCollection = new Notes()
    const noteObject = notesCollection.get(id)

    notesCollection.remove(noteObject)
    container.removeChild(noteElement)

    location.reload()
}

function pinHandler(ev: MouseEvent) {
    const button = ev.target as HTMLInputElement
    const noteElement = button.parentElement.parentElement

    const id = idRetriever.retrieve(noteElement.id)
    const notesCollection = new Notes()
    const noteObject = notesCollection.get(id)

    const pinned = noteObject.isPinned ? false : true
        
    notesCollection.update(noteObject.id, {
        ...noteObject,
        isPinned: pinned
    } as Note)

    location.reload()
}