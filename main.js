// * Variabili

const shoppingItems = [];
const itemToAddElement = document.getElementById('new-element');
const addButton = document.getElementById('add');
const listContainerElement = document.querySelector('.list-container')



addButton.addEventListener('click', function() {
    
    const itemToAdd = itemToAddElement.value;
    let message = '<ul>'

    // ! Validatore

    if (itemToAdd && !shoppingItems.includes(itemToAdd)) {
        shoppingItems.push(itemToAdd);
    }
    
    // * Ciclo for

    for (let i = 0; i < shoppingItems.length; i++) {
            message += `<li>${shoppingItems[i]}<li><hr>`
        }
        
    console.log(shoppingItems)
    message += '<ul>'

    listContainerElement.innerHTML = message;

    // * Svuoto il campo ed imposto il focus appena premo il button
    itemToAddElement.value = ''
    itemToAddElement.focus();
});

// todo conservare i dati per la prossima volta che si apre la pagina
// todo tagliare gli elementi su cui si clicka