// Variabler
let num = 45;
num = 'test';

console.log(num);

let isSnowing: boolean;
isSnowing = 'test';
isSnowing = true;

const arr = [1, 2, 3, 4, 'mer test', false];
arr.push(true);

const newArr: boolean[] = [];

newArr.push(4);
newArr.push(true);

// Funktioner
const add = (x:number, y:number)=>{
    return x+y;
}
let result:number;
result = add(10, 2)

const logName = (first:string, last?:string)=>{
    if(last) console.log(first, last.toUpperCase());
    else console.log(first);

}

logName('David', 'The brave')
logName('David')

const mult = (x:number, y:number = 10)=>{
    return x*y;
}

console.log(mult(1))
console.log(mult(10, 8))
console.log(mult(10, 8, 8))

const callback = (a:string)=>{
    console.log(a);
}

const ho = (func:Function)=>{
    func('hej')
};

ho(callback)

// Union types

// const flipCoin = ():'heads'|'tails' =>{
//     return Math.random() > 0.5 ? 'heads' : 'tails';
// }

// console.log(flipCoin())

// type alias

type Coin = 'heads'|'tails';

const flipCoin = ():Coin =>{
    return Math.random() > 0.5 ? 'heads' : 'tails';
}

console.log(flipCoin())

type CoinArray = [Coin, Coin, Coin];

const coins:CoinArray = [flipCoin(), flipCoin(), flipCoin()];

console.log(coins)

type PersonArray = [string, number];

const person:PersonArray = ['Ali Madi', 1000];

// Push tar inte antal element i beaktande
person.push(100);
console.log(person)

type Ns = number|string;
type NsArray = Ns[];

const testNsArray:NsArray = ['test', 343, 'dfsdf'];

console.log(testNsArray)