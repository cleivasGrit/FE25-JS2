import fs from 'fs/promises';
import crypto from 'crypto';
import { type newMovie, type Movie } from './types';

//Från rotmappen obs!
const MOVIES_PATH = './public/movies.json'

const getMovies = async (): Promise<Movie[]> => {
    try {
        const jsonMovies = await fs.readFile(MOVIES_PATH, 'utf-8');
        const movies: Movie[] = await JSON.parse(jsonMovies);
        return movies;
    }
    catch(error){
        throw error;
    }
}

const writeMovies = async (movies: Movie[]) => {
    try {
        await fs.writeFile(MOVIES_PATH, JSON.stringify(movies, null, 2));
    }
    catch(error){
        throw error;
    }
}


const addMovie = async (movie: newMovie): Promise<Movie> => {
    const movies = await getMovies();

    // Lägg till ett ID
    const newMovie: Movie = { ...movie, id: crypto.randomUUID() }
    movies.push(newMovie);

    try {
        await writeMovies(movies);
        return newMovie;
    }
    catch (error) {
        throw error;
    }
}

const getMovieByID = async (id: string) => {
    try{
        const movies = await getMovies();
        const index = movies.findIndex((movie: any) => movie.id === id);
    
        if (index === -1) return;
        else return movies[index];
    }
        catch (error) {
        throw error;
    }
}

const deleteMovieByID = async (id: string) => {
    try{
        const movies = await getMovies();
        const index = movies.findIndex((movie: any) => movie.id === id);
    
        if (index === -1) return;
        else {
            // Splice returnerar en array med ett object så vi destructar den
            const [deletedMovie] = movies.splice(index, 1);
            await writeMovies(movies);
            return deletedMovie;
        }
    }
    catch (error) {
        throw error;
    }
}

const updateMovieRating = async (id: string, rating: number) => {
    try{
        const movies = await getMovies();
        const index = movies.findIndex((movie: any) => movie.id === id);
    
        if (index === -1) return;
        else {
            movies[index].rating = rating;
            await writeMovies(movies);
            return movies[index];
        }
    }
    catch (error) {
        throw error;
    }
}

export { getMovies, addMovie, getMovieByID, deleteMovieByID, updateMovieRating };
