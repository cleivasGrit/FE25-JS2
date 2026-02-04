type Book = {
    author: string,
    title: string,
    favorite: boolean
}

const book:Book = {
    author: 'JK Rowling',
    title: 'Harry Potter',
    favorite: false
}

book.author = '';

const books:Book[] = [];


type Test = {
    toggleFavorite: Function,
    name?:string
}

const test:Test = {
    toggleFavorite(p:string){
        console.log(p)
    }
}

const test2 = {
    toggleFavorite(){
        console.log('test')
    },
    name: 'Clara'
}

// Grunden för interface är ingen skillnad från när vi använde type 
interface BookInterface {
    author: string,
    title: string,
    favorite: boolean
}
interface Movie {
    title: string,
    director: string
}

const book2:BookInterface = {
    author: '',
    title: '',
    favorite: true
}

// obj är som parameter
interface List<obj> {
    list: obj[],
    name: string
}

// List med Book - Book är som argumentet
const booklist:List<Book> = {
    list: [book, book],
    name: 'boklista'
}

// List med Movie
const movieList: List<Movie>= {
    list: [{title: '', director: ''}, {title: '', director: ''}],
    name: 'filmlista'
}