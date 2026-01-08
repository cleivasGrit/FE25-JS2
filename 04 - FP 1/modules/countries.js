

export async function getCountries(){
    const url = `https://restcountries.com/v3.1/all?fields=name,population,languages,region,`;

    const res = await fetch(url);
    const countries = await res.json();

    return countries;
}

export function render(countries){
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