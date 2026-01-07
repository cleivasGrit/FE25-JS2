import { Account } from "./modules/Account.js";
import { AccountGUI } from "./modules/AccountGUI.js";

const account = new Account('savings', 0);

console.log(account.getName())

account.setName('house')
console.log(account.getName())

// account.generateID(); //ger error

// account.nyEgenskap = 'lalalal' //ger error eftersom vi returnerar a sealed object i construktorn
// console.log(account)

const account2 = new Account('sdfs', 0);
console.log(account2)


// const obj = {
//     prop: 0
// }

// obj.pro = 10;

// Object.seal(obj);
// obj.prooo = 100;

const aGUI = new AccountGUI('Car', 3000);
console.log(aGUI)

aGUI.renderAccount(document.body)


const toggle = document.querySelector('button');
toggle.addEventListener('click', event =>{
    aGUI.toggleDarkMode();
    console.log(aGUI)
})

console.log(aGUI)

