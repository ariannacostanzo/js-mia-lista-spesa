// Variabili
const itemToAddElement = document.getElementById('new-element');
const addButton = document.getElementById('add');
const listContainerElement = document.querySelector('.list-container')


// Funzioni

/** Crea un elemento li, che ha un contenuto e si appende ad un genitore
 * 
 * @param {*} content contenuto di li
 * @param {*} container il container al quale li si appende
 * @returns li
 */
function createListElement (content, container) {
    const listElement = document.createElement('li');
    listElement.innerText = content;
    container.appendChild(listElement);
    return listElement;
}


addButton.addEventListener('click', function() {
    
    //Recupero il valore dell'input
    const itemToAdd = itemToAddElement.value;

    //creo una nuova li, che ha come contenuto il valore dell'input e si appende a ul
    const newListElement = createListElement(itemToAdd, listContainerElement)
    
    
   

    //al click sinistro l'elemento è tagliato(toggle), al click destro è eliminato
    newListElement.addEventListener('mousedown', event => {
        if (event.button == 0) {
            newListElement.classList.toggle('deleted');
        } else if (event.button == 2) {
            newListElement.parentNode.removeChild(newListElement);
        }
    });
    
    
    //impedisco che al click destro si apra la finestra della pagina web nel container
    listContainerElement.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
    

    // Svuoto il campo ed imposto il focus appena premo il button
    itemToAddElement.value = ''
    itemToAddElement.focus();
});

// todo conservare i dati per la prossima volta che si apre la pagina


//al click l'elemento è tagliato, se è gia tagliato viene recuperato
    // newListElement.addEventListener('click', () => {
    //     newListElement.classList.toggle('deleted');
    // });

    //al click destro l'elemento viene totalmente eliminato
    // newListElement.addEventListener('click', () => {
    //     newListElement.parentNode.removeChild(newListElement);
    // });


// ? Vecchio codice che aveva un array che ora non mi serve più

// const shoppingItems = [];

// addButton.addEventListener('click', function() {
    
//     const itemToAdd = itemToAddElement.value;
//     let message = '<ul>'

//     // ! Validatore

//     if (itemToAdd && !shoppingItems.includes(itemToAdd)) {
//         shoppingItems.push(itemToAdd);
//     }
    
//     // * Ciclo for

//     for (let i = 0; i < shoppingItems.length; i++) {
//             message += `<li>${shoppingItems[i]}<li><hr>`
//         }
        
//     console.log(shoppingItems)
//     message += '<ul>'

//     listContainerElement.innerHTML = message;

//     // * Svuoto il campo ed imposto il focus appena premo il button
//     itemToAddElement.value = ''
//     itemToAddElement.focus();
// });