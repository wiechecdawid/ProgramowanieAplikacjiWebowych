export const controllsCreator = {
    createControlls: () => {
        const container = document.createElement('div')
        container.classList.add('note-controlls')

        const pinButton = document.createElement('button')
        pinButton.classList.add('button')
        pinButton.classList.add('pin-unpin-button')
        pinButton.innerText = 'Pin/Unpin'

        const deleteButton = document.createElement('button')
        pinButton.classList.add('button')
        deleteButton.classList.add('note-delete-button')
        deleteButton.innerHTML = '&#10006'

        container.append(pinButton, deleteButton)

        return container as HTMLDivElement
    }
}