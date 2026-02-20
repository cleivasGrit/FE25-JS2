import { Router } from "express";
import type { Response, Request } from "express";
import { addSong, deleteSong, getIndexByID, getIndexByName, readSongs, updateGenre } from "./fileoperations";
import { body, validationResult } from "express-validator"

export const songRouter = Router();



songRouter.get('/all', async (req, res) => {
    try {
        const songs = await readSongs();
        res.json(songs)
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Server error, could not read songs.' })
    }
})

songRouter.get('/:year', async (req, res) => {
    try {
        console.log(typeof req.params.year)
        const year = Number(req.params.year);
        const songs = await readSongs();

        const songsByYear = songs.filter(song => song.year === year);

        res.json(songsByYear)
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({ message: 'Server error, could not read songs.' })
    }
})

// Validerings middleware för inkommande post requests
const validations = [
    body("name").exists().isString(),
    body("artist").exists().isString(),
    body("composer").exists().isString(),
    body("year").exists().isNumeric(),
]

songRouter.post('/', validations, async (req: Request, res: Response) => {
    try {
        // console.log(req.body);
        const isValid = validationResult(req).isEmpty();
        if (isValid) {
            const newSong = await addSong(req.body);
            res.json(newSong);
        }
        else {
            res.status(400).json({ message: 'Wrong format' })
        }

    }
    catch (error) {
        res.status(500).json({ message: 'Server error, could not read songs.' })
    }
})


songRouter.delete('/', async (req, res) => {
    try {
        let index = -1;

        console.log(req.query)
        if (typeof req.query.name === 'string') index = await getIndexByName(req.query.name);
        else if (typeof req.query.id === 'string') index = await getIndexByID(req.query.id);

        if (index === -1) {
            res.status(404).json({ message: 'Song not found' });
        }
        else {
            await deleteSong(index);
            res.status(200).json({ message: 'Song deleted successfully.' })
        }
    }
    catch (error) {
        res.status(500).json({ message: 'Server error, could not read songs.' })
    }
})
songRouter.patch('/', body('genre').exists().isString(), async (req: Request, res: Response) => {
    try {
        console.log(req.body)
        const isValid = validationResult(req).isEmpty();

        // Om bodyn innehåller ett objekt med egensapen genre 
        if (isValid) {
            let index = -1;

            // console.log(req.query)
            // Hämta indexnumret fårn song arrayen med hjålp av id eller name i requestens query
            if (typeof req.query.name === 'string') index = await getIndexByName(req.query.name);
            else if (typeof req.query.id === 'string') index = await getIndexByID(req.query.id);

            // Om låten inte hittades
            if (index === -1) {
                res.status(404).json({ message: 'Song not found' });
            }
            // Om låten hittades uppdaterar vi den med genre
            else {
                const song = await updateGenre(index, req.body.genre);
                res.status(200).json(song)
            }
        }
        // Om bodyn inte innehåller ett objekt med egenskapen genre
        else {
            console.log(req.body);
            res.status(400).json({ message: 'Wrong format' })
        }
    }
    catch (error) {
        
        res.status(500).json({ message: 'Server error, could not read songs.' })
    }
})