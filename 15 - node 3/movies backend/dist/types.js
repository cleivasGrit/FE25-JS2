"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewMovie = void 0;
const isNewMovie = (obj) => {
    return (typeof obj === 'object' &&
        typeof obj.name === 'string' &&
        typeof obj.director === 'string' &&
        typeof obj.year === 'number' &&
        (obj.rating === null || typeof obj.rating === 'number'));
    //     return true;
    // else return false
};
exports.isNewMovie = isNewMovie;
// export const hasID = (obj: any) =>{
//     return ( typeof obj === 'object' &&
//         typeof obj.id === 'string'
//     )
// }
