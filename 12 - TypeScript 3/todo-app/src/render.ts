import type { TaskClass } from "./TaskClass.ts";

export const render = (tasks:TaskClass[]):void=>{

    const wrapper = document.querySelector('#tasks-wrapper') as HTMLDivElement;
    wrapper.innerHTML = '';

    tasks.forEach( task =>{
        const h2 = document.createElement('h2');

        h2.innerText = task.task;

        h2.style.marginBottom = '3rem' //bara så att man ska se vilken knapp som tillhär vilken task

        if(task.isDone){
            // Rule of separation - använd egentligen css-klasser
            h2.style.textDecoration = 'line-through';

            const btn = document.createElement('button');
            btn.innerText = 'X';
            btn.addEventListener('click', ()=>{
                task.delete();
            })
            wrapper.append(btn)
        }

        h2.addEventListener('click', ()=>{
            task.toggleIsDone();
        })

        wrapper.append(h2);
    })

}