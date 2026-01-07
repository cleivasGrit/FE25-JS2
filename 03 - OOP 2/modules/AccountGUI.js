import { Account } from "./Account.js";

export class AccountGUI extends Account{
    #darkMode;
    constructor(name, balance, darkMode = true){
        super(name, balance);
        this.#darkMode = darkMode;
    }

    renderAccount(container){
        const h1 = document.createElement('h1');
        const pEl = document.createElement('p');

        h1.innerText = super.getName();
        pEl.innerText = super.getBalance();

        if(this.#darkMode){
            h1.classList.add('dark')
            pEl.classList.add('dark')
        }

        container.append(h1, pEl);
    }
    toggleDarkMode(){
        this.#darkMode = !this.#darkMode; 
        this.#toggleDarkClass();
    }
    #toggleDarkClass(){
        // OBS vi gör på detta sätt endast för att det inte finns något annat GUI på sidan och jag hade inte planerat och är lite lite lat

        const h1 = document.querySelector('h1');
        const p = document.querySelector('p');

        h1.classList.toggle('dark');
        p.classList.toggle('dark');
    }
}