const user = {
    name: 'Superwoman',
    age: 1000,
    isStrong: true,
    obj: {
        prop: 1234
    }
}


// const age = user.age;
// const name = user.name;

let {age, name} = user;

console.log(age, name)

age = 2000;
console.log(user)

user.name = 'Daniel';
console.log(name);

// None primitive datatype för att visa att som vanligt pekar de på stället i minnet
const {obj} = user;

console.log(obj)
user.obj.prop = 'ÄNDRAT'
console.log(obj)

// arrayer
const arr = [1, 2, 3, 4];
const [a, b] = arr;

console.log(a, b);

// Object shorthand
const temp = 'kallt';
const city = 'Malmö';

const weather = {temp, city};
console.log(weather)


// destruct parametrar
function logName({name, age}){
    console.log(name, age)
}

logName(user);