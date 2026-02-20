import fs from 'fs/promises';
import type { Song, NewSong } from './types';
import { writeFile } from 'fs';

const SONGS_PATH = './public/songs.json';

export const readSongs = async (): Promise<Song[]> => {
    try {
        const jsonSongs = await fs.readFile(SONGS_PATH, 'utf-8');

        return JSON.parse(jsonSongs);
    }
    catch (error) {
        throw error;
    }
}

const writeSongs = async (songs: Song[]) => {
    try {
        await fs.writeFile(SONGS_PATH, JSON.stringify(songs, null, 2))
    }
    catch (error) {
        throw error;
    }
}

export const addSong = async (song: NewSong) => {
    try {
        const songs = await readSongs();
        const newSong: Song = { ...song, id: crypto.randomUUID() };

        songs.push(newSong);
        await writeSongs(songs);
        return newSong;
    }
    catch (error) {
        throw error;
    }
}

export const getIndexByID = async (id: string) => {
    try {
        const songs = await readSongs();
        return songs.findIndex(song => song.id === id)
    }
    catch (error) {
        throw error;
    }
}

export const getIndexByName = async (name: string) => {
    try {
        const songs = await readSongs();
        return songs.findIndex(song => song.name === name)
    }
    catch (error) {
        throw error;
    }
}

export const deleteSong = async (index: number) => {
    try {
        const songs = await readSongs();
        songs.splice(index, 1);

        await writeSongs(songs);
    }
    catch (error) {
        throw error;
    }
}

export const updateGenre = async (index: number, genre: string) =>{
    try{
        const songs = await readSongs();

        songs[index].genre = genre;
        await writeSongs(songs);
        return songs[index];
    }
    catch(error){
        throw error;
    }
}


// Bara för att testa om addSong fungerar
// addSong(  {
//     "name": "O Death",
//     "artist": "Ralph Stanley",
//     "composer": "lksdjflksjflkd (arr. Ralph Stanley)",
//     "year": 2389
//   }
// )
