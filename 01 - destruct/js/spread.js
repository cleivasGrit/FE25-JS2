const arr = [4, 34, 42, 7, 4, 28, 8];

console.log(arr);
console.log(...arr)
console.log(4, 34, 42, 7, 4, 28, 8)


const max = Math.max(...arr)
console.log(max)


// spread object

const obj1 = {
    p1: 'p1 från obj1',
    p2: 'p2 från obj1'
}

const obj2 = {
    p3: 'p3 från obj2',
    p4: 'p4 från obj2'
}

console.log(obj1);
// const obj3 = {obj1, obj2};
const obj3 = {...obj1, ...obj2};
console.log(obj3);



// Spread för att klona
const strings = ['ett', 'två', 'tre'];
// const strings2 = strings; //Inte klonad
const strings2 = [...strings]

console.log(strings, strings2)
strings[0] = 'TIO';
console.log(strings, strings2)


const user = {
    name: 'Clara'
}

// const user2 = user;
const user2 = {...user}

console.log(user, user2)
user.name = 'Matilda';
console.log(user, user2)


