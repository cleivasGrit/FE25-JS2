export class CountryCard{
    constructor(name, flagURL){
        this.name = name;
        this.flagURL = flagURL;
        
        this.div = document.createElement('div');
    }

    displayCard(container){
        const h1 = document.createElement('h1');
        const img = document.createElement('img');

        h1.innerText = this.name;
        img.src = this.flagURL;

        this.div.append(h1, img);
        container.append(this.div);
    }
}