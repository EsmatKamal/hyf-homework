// 1. Create an array of movies containing the movies with a short title (you define what short means)
const shortMovies = movies
    .filter(movie => movie.title.length <= 5); // short titles should be defined as titles with length less than or equal to 5
console.log(shortMovies);

// 2. Create an array of movie titles with long movie titles
const longTitles = movies
    .filter(movie => movie.title.length >= 60)
    .map(movie => movie.title);
console.log(longTitles);

// 3. Count the number of movies made between 1980-1989 (including both the years)
const eighties = movies
    .filter(movie => movie.year >= 1980 && movie.year <= 1989) // inclusive range should use greater than or equal to and less than or equal to operators
    .length; 
console.log(eighties);

// 4. Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)
const ratedMovies = movies.map((movie) => {
    if (movie.rating >= 7) {
        movie.tag = "Good";
    } else if (movie.rating >= 4) { // else if condition only needs to check if rating is greater than or equal to 4, since if it's less than 4, the code would have already gone into the first if statement
        movie.tag = "Average";
    } else {
        movie.tag = "Bad";
    }
    return movie;
});

// 5. Using chaining, first filter the movies array to only contain the movies rated higher than 6. 
// Now map the movies array to only the rating of the movies.
const sorted = movies
    .filter(movie => movie.rating > 6) // movies rated higher than 6 should use greater than operator, since the prompt says "higher than 6"
    .map(movie => movie.rating);

// 6. Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin. So if there were 3 movies that contained Surfer, 1 with Alien and 2 with Benjamin, you would return 6. Can you make sure the search is case insensitive?
const moviesKeywords = movies.filter((movie) => movie.title.toLowerCase().includes("surfer") 
    || movie.title.toLowerCase().includes("benjamin") 
    || movie.title.toLowerCase().includes("alien") 
).length;
console.log(moviesKeywords);

// 7. Create an array of movies where a word in the title is duplicated. Fx "Star Wars: The Clone Wars" the word Wars is duplicated. Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol", "Chase three - The final chase"
const duplicatedMovies = movies.filter((movie) => {
    const titleSplit = movie.title.toLowerCase().split(" ");
    for (let i = 0; i < titleSplit.length; i++) {
        if (titleSplit.indexOf(titleSplit[i]) !== titleSplit.lastIndexOf(titleSplit[i])) {
            return true; // return true if a duplicated word is found
        }
    }
    return false; // return false if no duplicated word is found
}).map(movie => movie.title); // map the movies to only the movie titles with duplicated words
console.log(duplicatedMovies);

// 8. Calculate the average rating of all the movies using reduce.
const totalMoviesRatings = movies.reduce((accumulator, movie) => accumulator + movie.rating, 0);
const averageRating = (totalMoviesRatings / movies.length).toFixed(1);
console.log(averageRating);
// 9. Count the total number of Good, Average and Bad movies using reduce. Optional
const movieTag = movies.reduce((accumulator, movie) => {
    if (movie.rating >= 7) {
    accumulator.goodMovies++;
    } else if (movie.rating >= 4 && movie.rating < 7) {
    accumulator.averageMovies++;
    } else if (movie.rating < 4) {
    accumulator.badMovies++;
    }
    return accumulator;
    }, { goodMovies: 0, averageMovies: 0, badMovies: 0 });
    console.log(movieTag);
