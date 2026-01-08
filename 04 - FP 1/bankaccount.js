// Bank account med FP

// const test = 100;
// const obj = {test};
// console.log(obj)

const createAccount = (name, balance) =>{return {name, balance} };

// sätta in pengar
const deposit = (acc, amount) => {
    const clone = {...acc};
    clone.balance += amount;
    return clone;
} 

// Ta ut pengar
const withdraw = (acc, amount)=>{
    const clone = {...acc};
    if(amount < clone.balance) clone.balance -= amount;
    return clone;
}

// Inte superpraktiskt
const account = createAccount('savings', 30000);
console.log(account)

const depositedAccount = deposit(account, 1000);
console.log(depositedAccount);

const withdrawAccount = withdraw(depositedAccount, 4000);

console.log(withdrawAccount);