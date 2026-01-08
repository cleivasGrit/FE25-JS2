import {render, getCountries} from "./modules/countries.js"
import { sort, filterRegion } from "./modules/filtering.js";

let countries = [];

getCountries()
    .then( arr =>{
        countries = arr;
        console.log(countries)
        render(countries);
    });

const filterSelect = document.querySelector('#filter');
const sortSelect = document.querySelector('#sort');

filterSelect.addEventListener('change', event =>{
    const filteredCountries = filterRegion(countries, filterSelect.value);
    const sortedCountries = sort(filteredCountries, sortSelect.value);
    render(sortedCountries)
})

sortSelect.addEventListener('change', event =>{
    const filteredCountries = filterRegion(countries, filterSelect.value);
    const sortedCountries = sort(filteredCountries, sortSelect.value);
    render(sortedCountries)
})

