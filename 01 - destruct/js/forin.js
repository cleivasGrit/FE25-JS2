const arrObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
  };

console.log(arrObj[1])

const user = {
    name: 'Clara',
    age: 39
}

console.log(user.name);
console.log( user['name'])

const key = 'name';
console.log(user[key]);

const character = {
    name: 'Gandalf',
    type: 'Wizard',
    hobby: 'Smoke'
}

for(const key in character){
    console.log(key, character[key]);
}


async function getCountries(language){
    const url = `https://restcountries.com/v3.1/lang/${language}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log(data);
    const countries = data.map( ({name, flags, population}) => {
        // console.log(name, flags, population);
        const {common} = name;
        const {png} = flags;    

        return {common, png, population};
    } )

    // console.log(countries)

    return countries;
}

getCountries('spanish').then( countries => {

    countries.forEach( displayCountryName )

    // for(const country of countries ){
    //     displayCountryName(country)
    // }
});

function displayCountryName({common}){
    const pEl = document.createElement('p');
    pEl.innerText = common;
    document.body.append(pEl);
}