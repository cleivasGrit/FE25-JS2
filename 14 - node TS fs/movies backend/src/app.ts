import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from "cors";
import { getMovies, addMovie, getMovieByID, deleteMovieByID, updateMovieRating } from './fileoperations';
import { isNewMovie } from './types';
// import type { Request, Response, NextFunction } from '@types/express';

export const app = express();

const middleware = (req: Request, res: Response, next: NextFunction)=>{
    console.log('Ett middleware');
    next();
}

app.use( express.json() );
app.use( cors() );
app.use(middleware);

app.get('/movies', async (req, res) => {

    console.log('Queries:', req.query)
    // Om det finns en query med ett id som är en string försöker vi hämta en enskild film
    try{
        if (typeof req.query.id === 'string') {
            console.log('ID')
            const movie = await getMovieByID(req.query.id);
    
            if (movie) res.json(movie);
            else res.status(404).json({ message: 'No Movie found with matching ID' })
    
        }
        // I annat fall hämtar vi alla filmer
        else {
            const movies = await getMovies();
            console.log('Get all movies')
            res.json(movies);
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ message: 'failed to get movie or movies' });
    }
})

app.post('/movies', async (req, res) => {

    console.log(req.body);

    try {
        if(isNewMovie(req.body)){
            const newMovie = await addMovie(req.body);
            res.json({ message: 'success', newMovie });
        }
        else{
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to add movie' });
    }
})

app.delete('/movies', async (req, res) => {
    try{
        if (typeof req.query.id === 'string') {
    
            const movie = await deleteMovieByID(req.query.id);
    
            if (movie) res.json({ message: 'Movi deleted', movie });
            else res.status(404).json({ message: 'No Movie found with matching ID' })
    
        }
        // I annat fall hämtar vi alla filmer
        else {
            res.status(400).json({ message: 'The request is missing an ID' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to delete movie' });
    }
})

app.patch('/movies', async (req, res) => {

    // Har requestem query params med ett id?
    // Och har bodyn rating som är ett number?
    try{
        if (typeof req.query.id === 'string' && typeof req.body.rating === 'number') {
    
            const movie = await updateMovieRating(req.query.id, req.body.rating);
    
            if (movie) res.json({ message: 'Movie deleted', movie });
            else res.status(404).json({ message: 'No Movie found with matching ID' })
        }
        // I annat fall hämtar vi alla filmer
        else {
            res.status(400).json({ message: 'The request is missing an ID and/or ratng' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to delete movie' });
    }
})