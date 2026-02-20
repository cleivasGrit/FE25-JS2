const url = 'http://www.localhost:3000/songs';

// fetch(url+'/2001')
//   .then( res => res.json())
//   .then( songs => console.log(songs))


const patch = async ()=>{

  const options = {
    method: 'PATCH',
    body: JSON.stringify({genre: 'alternative metal'}),
    headers: {
      'Content-type': 'application/json'
    }
  }

  const res = await fetch(url + '?name=Schism', options);
  const data = await res.json()

  console.log(data);
}

patch();