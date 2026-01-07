export class Account{
    #name;
    #balance;

    constructor(name, balance){
        this.#name = name;
        this.#balance = balance;

        this.#generateID();
        return Object.seal(this);
    }

    getName(){
        return this.#name;
    }
    getBalance(){
        return this.#balance;
    }

    setName(newName){
        if(typeof newName === 'string') this.#name = newName;
        else console.log('invalid datatype')
    }

    deposit(amount){
        this.#balance += amount;
    }
    withdraw(amount){
        if(amount <= this.#balance) this.#balance -= amount;
        else console.log('not enough funds');
    }
    #generateID(){
        console.log('id generated');
    }
}

