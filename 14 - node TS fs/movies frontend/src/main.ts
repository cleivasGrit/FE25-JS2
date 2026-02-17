const url = 'http://localhost:3000/movies';

export type Movie = {
    name: string,
    director: string,
    id: `${string}-${string}-${string}-${string}-${string}`,
    year: number,
    rating?: number
}

export type NewMovie = {
    name: string,
    director: string,
    year: number,
    rating?: number
}

const getMovies = async ():Promise<Movie[]>=>{
    try{
        const res = await fetch(url);
        const movies:Movie[] = await res.json();
        return movies;
    }
    catch(error){
        throw error;
    }
}

getMovies();


const postMovie = async (newMovie: NewMovie)=>{
    const options = {
        method: 'POST',
        body: JSON.stringify(newMovie),
        headers: {
             "Content-type": "application/json; charset=UTF-8"
        }
    };

    const res = await fetch(url, options);
    console.log(res)

    const data = await res.json();
    console.log(data);
}

const newMovie: NewMovie = {
    name: "One battle after another",
    director: 'Blanc',
    year: 2025,
    rating: 10
}

postMovie(newMovie)
    .then(getMovies);