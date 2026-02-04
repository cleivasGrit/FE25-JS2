const btn = document.createElement('button');

// Elementselektor = TypeScript kan räkna ut
const h1 = document.querySelector('h1');

const knapp = document.querySelector('#knapp') as HTMLButtonElement;

// ? läggs till av typescript eftersom knapp skulle kunna vara null
knapp.addEventListener('click', ()=>{
    console.log('klick')
})

// Vissa egenskaper existera endast på vissa element 
// knapp.src = 'test';

// const input = document.querySelector('.input') as HTMLInputElement;
const input = document.querySelector('.input') as HTMLInputElement;


