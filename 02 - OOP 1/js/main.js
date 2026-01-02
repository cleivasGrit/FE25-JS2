import { CountryCard } from "./CountryCard.js";
import { Counter } from "../Counter.js";

const c1 = new Counter('lightblue');
c1.display(document.body)
const c2 = new Counter('limegreen');
c2.display(document.body)
const c3 = new Counter('hotpink');
c3.display(document.body)
const c4 = new Counter('orange');
c4.display(document.body)

console.log(c1)


// Countries
let countryCards =[];

async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const response = await fetch(url);
    const countries = await response.json();

    return countries;
}

getCountries('arabic')
    .then( countries =>{
        console.log(countries);

        countryCards = countries.map( ({name, flags}) => new CountryCard(name.common, flags.png) )

        console.log(countryCards);

        countryCards.forEach( card => card.displayCard(document.body))
    })



// const ar = x => x+1;
// console.log(ar(1))