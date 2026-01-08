export const sort = (arr, by) =>{
    const clone = [...arr];

    if(by === 'az') clone.sort((a, b)=> a.name.common.localeCompare(b.name.common));
    else if(by === 'za') clone.sort((a, b)=> b.name.common.localeCompare(a.name.common));

    // console.log(clone)
    return clone;
}


export const filterRegion = (arr, region) => region === 'default' ? [...arr] : arr.filter( country => country.region.toLowerCase() === region);