// För er info om hur prototypes finns överallt i JS
// console.log(document)
// console.log(Object.getPrototypeOf(document))

// const obj = {
//     p: 1
// }

// console.log(obj)

// function test(){};

// console.log(test)

function Animal(type, sound){
    this.type = type;
    this.sound = sound;
}

Animal.prototype.makeSound = function(){
    console.log(`The ${this.type} says ${this.sound}, ${this.sound}`)
}


const cat = new Animal('cat', 'meow');
const bird = new Animal('bird', 'peeeeep')

console.log(cat, bird)

cat.makeSound();
bird.makeSound();


// Endast för info
// Array.prototype.test = ()=>{
//     console.log('et här är ett test')
// }

// const arr = [1, 2, 3];
// arr.test();