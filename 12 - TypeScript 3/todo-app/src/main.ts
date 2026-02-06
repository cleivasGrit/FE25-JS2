import { onValue, push, ref, update } from "firebase/database";
import { db } from "./firebaseconfig";
import { TaskClass } from "./TaskClass.ts";
import { render } from "./render.ts";

const todoRef = ref(db, 'to-do');
const form = document.querySelector('form');

onValue(todoRef, snapshot =>{
  // console.log(snapshot.val())
  const obj = snapshot.val();
  const tasks:TaskClass[] = [];

  for(const key in obj){
    // console.log(key, obj[key])
    tasks.push( new TaskClass(obj[key].task, obj[key].isDone, key) )
  }

  console.log(tasks)

  render(tasks)
}, error=>{
  console.log(error)
})

form?.addEventListener('submit', event =>{
  event.preventDefault();
  
  const newTask = form.querySelector('input')?.value;

  const newID = push(todoRef).key;
  const newRef = ref(db, 'to-do/'+newID);
  update(newRef, {task: newTask, isDone: false});
  
})