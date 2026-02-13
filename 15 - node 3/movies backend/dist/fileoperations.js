"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMovieRating = exports.deleteMovieByID = exports.getMovieByID = exports.addMovie = exports.getMovies = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const crypto_1 = __importDefault(require("crypto"));
//Från rotmappen obs!
const MOVIES_PATH = './public/movies.json';
const getMovies = async () => {
    try {
        const jsonMovies = await promises_1.default.readFile(MOVIES_PATH, 'utf-8');
        const movies = await JSON.parse(jsonMovies);
        return movies;
    }
    catch (error) {
        throw error;
    }
};
exports.getMovies = getMovies;
const writeMovies = async (movies) => {
    try {
        await promises_1.default.writeFile(MOVIES_PATH, JSON.stringify(movies, null, 2));
    }
    catch (error) {
        throw error;
    }
};
const addMovie = async (movie) => {
    const movies = await getMovies();
    // Lägg till ett ID
    const newMovie = { ...movie, id: crypto_1.default.randomUUID() };
    movies.push(newMovie);
    try {
        await writeMovies(movies);
        return newMovie;
    }
    catch (error) {
        throw error;
    }
};
exports.addMovie = addMovie;
const getMovieByID = async (id) => {
    try {
        const movies = await getMovies();
        const index = movies.findIndex((movie) => movie.id === id);
        if (index === -1)
            return;
        else
            return movies[index];
    }
    catch (error) {
        throw error;
    }
};
exports.getMovieByID = getMovieByID;
const deleteMovieByID = async (id) => {
    try {
        const movies = await getMovies();
        const index = movies.findIndex((movie) => movie.id === id);
        if (index === -1)
            return;
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
};
exports.deleteMovieByID = deleteMovieByID;
const updateMovieRating = async (id, rating) => {
    try {
        const movies = await getMovies();
        const index = movies.findIndex((movie) => movie.id === id);
        if (index === -1)
            return;
        else {
            movies[index].rating = rating;
            await writeMovies(movies);
            return movies[index];
        }
    }
    catch (error) {
        throw error;
    }
};
exports.updateMovieRating = updateMovieRating;
