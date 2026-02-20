"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.songRouter = void 0;
const express_1 = require("express");
const fileoperations_1 = require("./fileoperations");
const express_validator_1 = require("express-validator");
exports.songRouter = (0, express_1.Router)();
exports.songRouter.get('/all', async (req, res) => {
    try {
        const songs = await (0, fileoperations_1.readSongs)();
        res.json(songs);
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Server error, could not read songs.' });
    }
});
exports.songRouter.get('/:year', async (req, res) => {
    try {
        console.log(typeof req.params.year);
        const year = Number(req.params.year);
        const songs = await (0, fileoperations_1.readSongs)();
        const songsByYear = songs.filter(song => song.year === year);
        res.json(songsByYear);
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Server error, could not read songs.' });
    }
});
// Validerings middleware för inkommande post requests
const validations = [
    (0, express_validator_1.body)("name").exists().isString(),
    (0, express_validator_1.body)("artist").exists().isString(),
    (0, express_validator_1.body)("composer").exists().isString(),
    (0, express_validator_1.body)("year").exists().isNumeric(),
];
exports.songRouter.post('/', validations, async (req, res) => {
    try {
        // console.log(req.body);
        const isValid = (0, express_validator_1.validationResult)(req).isEmpty();
        if (isValid) {
            const newSong = await (0, fileoperations_1.addSong)(req.body);
            res.json(newSong);
        }
        else {
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error, could not read songs.' });
    }
});
exports.songRouter.delete('/', async (req, res) => {
    try {
        let index = -1;
        console.log(req.query);
        if (typeof req.query.name === 'string')
            index = await (0, fileoperations_1.getIndexByName)(req.query.name);
        else if (typeof req.query.id === 'string')
            index = await (0, fileoperations_1.getIndexByID)(req.query.id);
        if (index === -1) {
            res.status(404).json({ message: 'Song not found' });
        }
        else {
            await (0, fileoperations_1.deleteSong)(index);
            res.status(200).json({ message: 'Song deleted successfully.' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error, could not read songs.' });
    }
});
exports.songRouter.patch('/', (0, express_validator_1.body)('genre').exists().isString(), async (req, res) => {
    try {
        console.log(req.body);
        const isValid = (0, express_validator_1.validationResult)(req).isEmpty();
        // Om bodyn innehåller ett objekt med egensapen genre 
        if (isValid) {
            let index = -1;
            // console.log(req.query)
            // Hämta indexnumret fårn song arrayen med hjålp av id eller name i requestens query
            if (typeof req.query.name === 'string')
                index = await (0, fileoperations_1.getIndexByName)(req.query.name);
            else if (typeof req.query.id === 'string')
                index = await (0, fileoperations_1.getIndexByID)(req.query.id);
            // Om låten inte hittades
            if (index === -1) {
                res.status(404).json({ message: 'Song not found' });
            }
            // Om låten hittades uppdaterar vi den med genre
            else {
                const song = await (0, fileoperations_1.updateGenre)(index, req.body.genre);
                res.status(200).json(song);
            }
        }
        // Om bodyn inte innehåller ett objekt med egenskapen genre
        else {
            console.log(req.body);
            res.status(400).json({ message: 'Wrong format' });
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error, could not read songs.' });
    }
});
