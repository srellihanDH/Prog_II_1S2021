const movies = require('popular-movie-quotes');
//console.log(movies);


for (let index = 1; index <= 3; index++) {
    console.log("Frase " + index + ": ");
    console.log(movies.getRandomQuote())
}
