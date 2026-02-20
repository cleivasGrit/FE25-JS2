"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateGenre = exports.deleteSong = exports.getIndexByName = exports.getIndexByID = exports.addSong = exports.readSongs = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const SONGS_PATH = './public/songs.json';
const readSongs = async () => {
    try {
        const jsonSongs = await promises_1.default.readFile(SONGS_PATH, 'utf-8');
        return JSON.parse(jsonSongs);
    }
    catch (error) {
        throw error;
    }
};
exports.readSongs = readSongs;
const writeSongs = async (songs) => {
    try {
        await promises_1.default.writeFile(SONGS_PATH, JSON.stringify(songs, null, 2));
    }
    catch (error) {
        throw error;
    }
};
const addSong = async (song) => {
    try {
        const songs = await (0, exports.readSongs)();
        const newSong = { ...song, id: crypto.randomUUID() };
        songs.push(newSong);
        await writeSongs(songs);
        return newSong;
    }
    catch (error) {
        throw error;
    }
};
exports.addSong = addSong;
const getIndexByID = async (id) => {
    try {
        const songs = await (0, exports.readSongs)();
        return songs.findIndex(song => song.id === id);
    }
    catch (error) {
        throw error;
    }
};
exports.getIndexByID = getIndexByID;
const getIndexByName = async (name) => {
    try {
        const songs = await (0, exports.readSongs)();
        return songs.findIndex(song => song.name === name);
    }
    catch (error) {
        throw error;
    }
};
exports.getIndexByName = getIndexByName;
const deleteSong = async (index) => {
    try {
        const songs = await (0, exports.readSongs)();
        songs.splice(index, 1);
        await writeSongs(songs);
    }
    catch (error) {
        throw error;
    }
};
exports.deleteSong = deleteSong;
const updateGenre = async (index, genre) => {
    try {
        const songs = await (0, exports.readSongs)();
        songs[index].genre = genre;
        await writeSongs(songs);
        return songs[index];
    }
    catch (error) {
        throw error;
    }
};
exports.updateGenre = updateGenre;
// Bara för att testa om addSong fungerar
// addSong(  {
//     "name": "O Death",
//     "artist": "Ralph Stanley",
//     "composer": "lksdjflksjflkd (arr. Ralph Stanley)",
//     "year": 2389
//   }
// )
