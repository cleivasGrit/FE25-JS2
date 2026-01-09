function say(name){
    const greeting = 'Hello, ' + name + '!';

    return function(){
        console.log(greeting);
    }
}

const helloIsak = say('Isak');
helloIsak();

const helloMohammed = say('Mohammed');
helloMohammed();

// console.log(helloIsak)

function createCounter(id){
    let count = 0;

    return function(){
        count++;
        console.log('id:', id, 'count: ', count);
    }
}

const counter = createCounter(1);
counter()
counter()
counter()
counter()

const counter2 = createCounter(2);

counter2();
counter2();
counter2();
counter2();

// Tredje versionen av Bank account

function createAccount(name, balance){
    return {
        deposit(amount){
            balance+=amount;
        },
        withdraw(amount){
            balance-=amount;
        },
        showBalance(){
            console.log(name, balance);
        }
    }
}

const savings = createAccount('savings', 0);
console.log(savings)
savings.showBalance();
savings.deposit(1000)
savings.showBalance();
const houseSaving = createAccount('house', 2000);
houseSaving.withdraw(1000);
houseSaving.showBalance();

const btns = document.querySelectorAll('button')

btns[0].addEventListener('click', resize(100) )
btns[1].addEventListener('click', resize(33.33))

function resize(size){
    return function(){
        const div = document.querySelector('#resize');
        div.style.width = size+'%';
    }
}


