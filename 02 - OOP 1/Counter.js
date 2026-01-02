export class Counter{
    constructor(color){
        this.color = color;

        this.current = 0;
        this.h1 = document.createElement('h1');
    }
    add(){
        this.current++;
    }
    subtract(){
        this.current--;
        if(this.current < 0) this.current = 0;
    }
    update(){
        this.h1.innerText = this.current;
    }

    display(container){
        const div = document.createElement('div');
        const btnAdd = document.createElement('button')
        const btnSub = document.createElement('button')

        div.style.backgroundColor = this.color;

        this.h1.innerText = this.current;
        btnAdd.innerText = '+';
        btnSub.innerText = '-';

        btnAdd.addEventListener('click', event=>{
            this.add();
            this.update();
        })
        btnSub.addEventListener('click', event=>{
            this.subtract();
            this.update();
        })

        div.append(this.h1, btnAdd, btnSub);
        container.append(div);
    }
}
