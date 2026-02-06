import { ref, remove, update, type DatabaseReference } from "firebase/database";
import type { Task } from "./models";
import { db } from "./firebaseconfig";

export class TaskClass implements Task{
    public readonly task: string;
    public readonly isDone: boolean;
    public readonly id: string;
    private readonly reference: DatabaseReference;

    constructor(task:string, isDone:boolean, id: string){
        this.task = task;
        this.isDone = isDone;
        this.id = id;

        this.reference = ref(db, 'to-do/'+this.id); 
    }

    delete(){
        remove(this.reference);
    }
    toggleIsDone(){
        update(this.reference, {isDone: !this.isDone});
    }
}