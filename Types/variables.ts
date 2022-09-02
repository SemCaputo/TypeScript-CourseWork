let movieTitle: string = 'Amadeus';
movieTitle = 'Arrival';
// movieTitle = 9;

let numCatLives: number = 9;
numCatLives = +1;
// numCatLives = 'zero'

let gameOver: boolean = false;
gameOver = true;
// gameOver = 'true'



// Type Inference
let tvShow = 'Ozark';
tvShow = 'Brooklyn 99';
// tvShow = 9;

let isFunny = true;
// isFunny = 9;

// Any Type 
// not a good idea to use it!! turns off TYPE CHECKING!!
let thing: any = 'Hello';
thing = 9;
thing = true;
thing.toUpperCase();

const movies = ['Arrival', 'The Thing', 'Aliens'];
// let foundMovie;
let foundMovie: string;

for (let movie of movies) {
    if (movie === 'Aliens') {
        foundMovie = 'Aliens'
    }
}
