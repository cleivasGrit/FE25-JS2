import fs from 'fs/promises';
import crypto from 'crypto';

//Från rotmappen obs!
const MOVIES_PATH = './public/movies.json'

const getMovies = async ()=>{
    const jsonMovies = await fs.readFile(MOVIES_PATH, 'utf-8');
    const movies = await JSON.parse(jsonMovies);
    return movies;
}

// OBS vi fixar typerna nsta genomgång
const writeMovies = async (movies:any)=>{
    await fs.writeFile(MOVIES_PATH, JSON.stringify(movies, null, 2));
}


// OBS vi fixar typerna nästa genomgång
const addMovie = async (movie:any)=>{
    const movies = await getMovies();

    // Lägg till ett ID
    const newMovie = {...movie, id: crypto.randomUUID()}
    movies.push(newMovie);

    try{
        await writeMovies(movies);
        return newMovie;
    }
    catch(error){
        throw error;
    }
}

const getMovieByID = async (id:string) =>{
    const movies = await getMovies();
    const index = movies.findIndex( (movie:any) => movie.id === id);
    
    if(index === -1) return;
    else return movies[index];
}

const deleteMovieByID = async (id:string)=>{
    const movies = await getMovies();
    const index = movies.findIndex( (movie:any) => movie.id === id);
    
    if(index === -1) return;
    else{
        // Splice returnerar en array med ett object så vi destructar den
        const [deletedMovie] = movies.splice(index, 1);
        await writeMovies(movies);
        return deletedMovie;
    }
}

const updateMovieRating = async (id:string, rating: number)=>{
    const movies = await getMovies();
    const index = movies.findIndex( (movie:any) => movie.id === id);
    
    if(index === -1) return;
    else {
        movies[index].rating = rating;
        await writeMovies(movies);
        return movies[index];
    }
}

export {getMovies, addMovie, getMovieByID, deleteMovieByID, updateMovieRating};
