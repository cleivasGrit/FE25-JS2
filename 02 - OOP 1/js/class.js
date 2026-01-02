class Animal{
    constructor(type, sound){
        this.type = type;
        this.sound = sound;
    }

    makeSound(){
        console.log(`The ${this.type} says ${this.sound}, ${this.sound}`);
    }
}

const cat = new Animal('cat', 'meow');
const bird = new Animal('bird', 'peeeeep')

console.log(cat, bird)

cat.makeSound();
bird.makeSound();

// För er info
// console.log(this)