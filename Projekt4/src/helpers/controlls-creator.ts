export const controllsCreator = {
    createControlls: () => {
        const container = document.createElement('div')
        container.classList.add('note-controlls')

        const pinButton = document.createElement('button')
        pinButton.classList.add('pin-unpin')
        pinButton.innerText = 'Pin/Unpin'

        const deleteButton = document.createElement('button')
        deleteButton.classList.add('note-delete')
        deleteButton.innerHTML = '&#10006'

        container.append(pinButton, deleteButton)

        return container as HTMLDivElement
    }
}