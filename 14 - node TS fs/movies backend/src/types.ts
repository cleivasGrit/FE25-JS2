export type Movie = {
    name: string,
    director: string,
    id: `${string}-${string}-${string}-${string}-${string}`,
    year: number,
    rating?: number
}

export type newMovie = {
    name: string,
    director: string,
    year: number,
    rating?: number
}

export const isNewMovie = (obj: any) =>{
    return ( typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.director === 'string' &&
        typeof obj.year === 'number' &&
        (obj.rating === null || typeof obj.rating === 'number'  )) 
    //     return true;
    // else return false
}   

// export const hasID = (obj: any) =>{
//     return ( typeof obj === 'object' &&
//         typeof obj.id === 'string'
//     )
// }