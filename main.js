// * Variabili

const shoppingItems = [];
const itemToAddElement = document.getElementById('new-element');
const addButton = document.getElementById('add');
const listContainerElement = document.querySelector('.list-container')

addButton.addEventListener('click', function() {
    const itemToAdd = itemToAddElement.value;
    let message = '<ul>'

    // ! Validatore

    if (itemToAdd) {
        shoppingItems.push(itemToAdd);
    }
    
    // * Ciclo for

    // message += `<li>${itemToAdd}<li><hr>`

    for (let i = 0; i < shoppingItems.length; i++) {
            message += `<li>${shoppingItems[i]}<li><hr>`
        }
        
    console.log(shoppingItems)


    message += '<ul>'

    listContainerElement.innerHTML = message;


});
