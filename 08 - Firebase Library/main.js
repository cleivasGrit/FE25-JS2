import { usersRef, db } from "./modules/firebaseconfig.js";
import {onValue, ref, remove, update, push} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-database.js";

let dbObj = {};

onValue(usersRef, snapShot => {
    // console.log(snapShot.val())
    dbObj = snapShot.val();
    const wrapper = document.querySelector('#users');
    wrapper.innerHTML = '';

    for(const key in dbObj){
        const h1 = document.createElement('h1');
        const delBtn = document.createElement('button');
        const userRef = ref(db, '/users/' + key); //Referensen till användaren

        h1.innerText = dbObj[key].name;
        delBtn.innerText = 'X';

        if(dbObj[key].admin) h1.innerText += ' - admin';
        
        wrapper.append(h1, delBtn);  

        // Uppdaterar admin false till true eller true till false
        h1.addEventListener('click', ()=>{
            update(userRef, {admin: !dbObj[key].admin})
        })
        // Ta bort noden från databasen
        delBtn.addEventListener('click', ()=>{
            remove(userRef)
        })


    }
})

// Add new user
const form = document.querySelector('form');

form.addEventListener('submit', event =>{
    event.preventDefault();

    const name = form.querySelector('#name').value.trim();
    const admin = form.querySelector('#admin').checked;

    // const newUser = {name, admin}
    // console.log(newUser)
    // console.log(form.querySelector('#admin'))

    const newID = push(usersRef).key;
    if(newID){
        // Lägg endast till namn som inte redan finns i databasen
        for(const key in dbObj){
            if(dbObj[key].name === name){
                console.log('User name already exists.')
                return;
            }
        }


        const newRef = ref(db, '/users/' + newID);
        update(newRef, {name, admin});
    }
})