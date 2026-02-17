"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const fileoperations_1 = require("./fileoperations");
const types_1 = require("./types");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.get('/movies', async (req, res) => {
    console.log('Queries:', req.query);
    // On det finns en query med ett id som är en string försöker vi hämta en enskild film
    try {
        if (typeof req.query.id === 'string') {
            console.log('ID');
            const movie = await (0, fileoperations_1.getMovieByID)(req.query.id);
            if (movie)
                res.json(movie);
            else
                res.status(404).json({ message: 'No Movie found with matching ID' });
        }
        // I annat fall hämtar vi alla filmer
        else {
            const movies = await (0, fileoperations_1.getMovies)();
            console.log('Get all movies');
            res.json(movies);
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'failed to get movie or movies' });
    }
});
exports.app.post('/movies', async (req, res) => {
    console.log(req.body);
    try {
        if ((0, types_1.isNewMovie)(req.body)) {
            const newMovie = await (0, fileoperations_1.addMovie)(req.body);
            res.json({ message: 'success', newMovie });
        }
        else {
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to add movie' });
    }
});
exports.app.delete('/movies', async (req, res) => {
    try {
        if (typeof req.query.id === 'string') {
            const movie = await (0, fileoperations_1.deleteMovieByID)(req.query.id);
            if (movie)
                res.json({ message: 'Movi deleted', movie });
            else
                res.status(404).json({ message: 'No Movie found with matching ID' });
        }
        // I annat fall hämtar vi alla filmer
        else {
            res.status(400).json({ message: 'The request is missing an ID' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to delete movie' });
    }
});
exports.app.patch('/movies', async (req, res) => {
    // Har requestem query params med ett id?
    // Och har bodyn rating som är ett number?
    try {
        if (typeof req.query.id === 'string' && typeof req.body.rating === 'number') {
            const movie = await (0, fileoperations_1.updateMovieRating)(req.query.id, req.body.rating);
            if (movie)
                res.json({ message: 'Movie deleted', movie });
            else
                res.status(404).json({ message: 'No Movie found with matching ID' });
        }
        // I annat fall hämtar vi alla filmer
        else {
            res.status(400).json({ message: 'The request is missing an ID and/or ratng' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'failed to delete movie' });
    }
});
