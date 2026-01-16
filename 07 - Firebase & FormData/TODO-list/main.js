import { Task } from "./modules/Task.js";
import { getAll, postTask } from "./modules/firebase.js";

const form = document.querySelector('form');
let tasks = [];

const createTasks =  data => {
    // Skapa en instans av Task för varje task i firebase
    // Detta så att vi senare skulle kunna filtrera och sortera dem om vi skulle vilja 
    for(const key in data){
        tasks.push(new Task(key, data[key].task, data[key].done ) )
    }

    // Rendera alla tasks genom att anropa render-metoden på varje task
    const taskWrapper = document.querySelector('#taskWrapper');
    taskWrapper.innerHTML = '';
    tasks.forEach(task => task.render(taskWrapper));
}

getAll()
    .then( createTasks )


form.addEventListener('submit', event =>{
    event.preventDefault();

    const newTask = form.querySelector('input').value.trim();
    if(newTask){
        // När post requesten är färdig, behöver vi hämta alla tasks för att kunna visa dem inklusive den senaste vi la till
        tasks = [];

        postTask(newTask)
            .then( getAll )
            .then( createTasks )
    }
})