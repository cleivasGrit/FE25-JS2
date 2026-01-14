import { patchName, getAll, post, patchExisting, deleteNode } from "./modules/firebase.js";

// Get för att hämta allt under /main.json
getAll()
    .then(data => {
        console.log(data)

        for (const key in data) {
            console.log(key)
        }
    })


// Patch för att lägga till en nod med ditt namn
document.querySelector('#patchName').addEventListener('click', () => {
    patchName();
})

// Post för att lägga till en nod med ett firebase-ID under ditt namn
document.querySelector('#post').addEventListener('click', () => {
    post({ middleName: 'Lisa' });
})

// Patch för att lägga till en nod med ditt namn
document.querySelector('#patchExisting').addEventListener('click', () => {
    patchExisting();
})

// Delete a node
document.querySelector('#delete').addEventListener('click', () => {
    deleteNode();
})