const addBtn = document.getElementById('addBtn')
let list = document.getElementById('list')
let listInput = document.getElementById('listInput')
let listItems = document.getElementsByClassName('list--item')
let listItemsArray = Array.from(listItems)

let removeBtn = document.getElementsByClassName('removeBtn')

for (let btn of removeBtn) {
    btn.addEventListener('click', function () {
        btn.previousElementSibling.style.display = 'none'
        btn.style.display = 'none'
    })
}

addBtn.addEventListener('click', addItem)

function addItem() {
    let newItem = document.createElement('li')
    let newRemoveBtn = document.createElement('button')
    let newRemoveBtnText = document.createTextNode('Remove')

    newItem.textContent = listInput.value
    newItem.classList.add('list--item')

    newRemoveBtn.appendChild(newRemoveBtnText)
    newRemoveBtn.classList.add('removeBtn')

    list.appendChild(newItem)
    list.appendChild(newRemoveBtn)
    listItemsArray.push(newItem)

    for (let btn of removeBtn) {
        btn.addEventListener('click', removeItem)
    }
}

function removeItem() {
    this.style.display = 'none'
    this.previousSibling.style.display = 'none'
}
