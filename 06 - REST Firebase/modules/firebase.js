const baseUrl = "https://restrictions-6ead1-default-rtdb.europe-west1.firebasedatabase.app/main";

export const patchName = async ()=>{
    const info = {
        favoriteFood: "all"
    }

    // Byt ut clara mot ditt egna namn
    const url = baseUrl + '/clara.json';
    const options = {
        method: 'PATCH',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

export const getAll = async ()=>{
    const url = baseUrl + '.json';

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data;
}

// Info förväntas vara ett objekt
export const post = async (info)=>{

    // Byt ut clara mot ditt egna namn
    const url = baseUrl + '/clara.json';
    const options = {
        method: 'POST',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}


export const patchExisting = async ()=>{
    // The key i det här objektet behöver vara samma som finns under ditt namn/firebaseID:t
    const info = {
        middleName: "Warrior"
    }

    // Byt ut clara mot ditt egna namn och se till att kopiera ett firebase ID som finns under ditt namn
    const url = baseUrl + '/clara/-Oiw3BydpT_mp4hvRELc.json';
    const options = {
        method: 'PATCH',
        body: JSON.stringify(info),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

export const deleteNode = async ()=>{

    // Byt ut clara mot ditt egna namn
    const url = baseUrl + '/clara/-Oiw3DWMa9LPNCX4MnGQ.json';
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}

