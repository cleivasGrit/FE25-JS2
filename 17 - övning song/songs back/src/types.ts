export type Song = {
    id: string,
    name:string,
    artist:string,
    composer:string,
    year:number,
    genre?: string
};

export type NewSong = {
    name:string,
    artist:string,
    composer:string,
    year:number,
    genre?: string
};