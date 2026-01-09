// Fifa, region, subregion och startOfWeek
// function filter(field){
//     return function(value){
//         return function(arr){
//             return arr.filter( country => {
//                 console.log(country, field, value, country[field].toLowerCase())
//                 return country[field].toLowerCase() === value
//             } )
//         }
//     }
// }

const filter = field => value => arr => arr.filter( country => country[field].toLowerCase() === value);

const filterByRegion = filter('region');
const filterByAfrica = filterByRegion('asia');

const filterbyWeek = filter('startOfWeek');
const filterBySunday = filterbyWeek('sunday');

async function getCountries(){
    const url = `https://restcountries.com/v3.1/all?fields=name,population,fifa,region,subregion,startOfWeek`;

    const res = await fetch(url);
    // console.log(res)
    const countries = await res.json();
    return countries;
}

function render(countries){
    const wrapper = document.querySelector('#countryWrapper')
    wrapper.innerHTML = '';

    countries.forEach( ({name, population}) => {
        const card = document.createElement('div')
        const titelEl = document.createElement('h3');
        const popEl = document.createElement('p');

        titelEl.innerText = name.common;
        popEl.innerText = population;

        card.append(titelEl, popEl);
        wrapper.append(card);
    })
}

getCountries()
    .then( countries =>{
        console.log(countries)
        // const filteredCountries = filterByAfrica(countries)
        // const filteredCountries = filterBySunday(countries)
        const filteredCountries = filter('region')('africa')(countries)

        // console.log(filteredCountries)
        render(filteredCountries)
    })

// const filterRegion = (arr, region) => region === 'default' ? [...arr] : arr.filter( country => country.region.toLowerCase() === region);

