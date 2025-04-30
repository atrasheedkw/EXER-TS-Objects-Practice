// 🎬 Part 1: Creating a Movie Object

// Imagine you're building a streaming platform like Netflix or Shahid.

// You need to describe a movie using an object. The movie has the following details:

// - Title: "Everything Everywhere All at Once"
// - Director: "Daniel Kwan and Daniel Scheinert"
// - Release Year: 2022
// - Genre: "Science Fiction"

// ✅ Task 1: Create an interface called `Movie` that defines the shape of a movie object.
//            The interface should include the following required properties:
//            - title (string)
//            - director (string or array of strings)
//            - releaseYear (number)
//            - genre (string)

//            And the following optional properties (use the `?` symbol):
//            - duration (number)
//            - rating (string)
//            - reviews (array of review objects)

interface movieType {
  //object interface
  title: string;
  Director: string | string[];
  releaseYear: number;
  Genre: string;
  duration?: number;
  rating?: string;
  reviews?: review[]; //review type is declared as an an object with qan interface in line 106
  // //nested object keys
  // reviewer?: string;
  // comment?: string;
  [key: string]: string | string[] | number | undefined | object;
}

// ✅ Task 2: Create a variable named `movie` and assign it an object that matches the Movie interface.

const movie: movieType = {
  //movie object with values as requested
  title: "Everything Everywhere All at Once",
  Director: "Daniel Kwan and Daniel Scheinert",
  releaseYear: 2022,
  Genre: "Science Fiction",
};

// ✅ Task 3: Access the movie’s title using dot notation, and access the release year using bracket notation.
//            (You can log them using `console.log`)
// ******************************************************************/

console.log(`${movie.title} ${movie["releaseYear"]}`);

// /*****************************************************************
// 🛠️ Part 2: Updating the Movie Object

// Now let’s say the movie got updated information and we want to add more details.

// ✅ Task 4: Add a new property to the `movie` object called `duration` and set it to 139 (minutes).

movie.duration = 139; //duration value added

// ✅ Task 5: Add another property called `rating` and set it to "R".

movie.rating = "R"; //rating value added

// ✅ Task 6: Update the `releaseYear` from 2022 to 2023 since the movie had a new release.
// ******************************************************************/

movie.releaseYear = 2023; //release year new value added

// /*****************************************************************
// 📚 Part 3: Making the Object More Advanced

console.log(`updating movie details check:`, movie);

// Let’s make our movie object even more flexible and realistic!

// ✅ Task 7: Change the `director` property so that it stores an array of two strings:
//            ["Daniel Kwan", "Daniel Scheinert"]

movie.Director = ["Daniel Kwan", "Daniel Scheinert"]; //2 authors added as an array

console.log(`2 authors movie update check:`, movie);

// ✅ Task 8: Add a new property called `reviews` to the movie object.
//            This should be an array of objects where each review has:
//            - reviewer (string)
//            - comment (string)

//            Start with one review:
//            {
//              reviewer: "Film Critic",
//              comment: "A wild, genre-bending masterpiece."
//            }

movie.reviews = [
  {
    reviewer: "Film Critic",
    comment: "A wild, genre-bending masterpiece.",
  },
];

// ✅ Task 9: Create a separate `Review` interface to describe the structure of each review.
//            Then, update the `Movie` interface to use this `Review[]` for the `reviews` property.
// ******************************************************************/
interface review {
  //review type interface
  reviewer?: string;
  comment?: string;
}

movie.reviews.push({
  reviewer: "Second Review",
  comment: "new review comment",
});

console.log(`let's test everything`, movie);
// /*****************************************************************
// 🎁 Part 4: Index Signatures

// Sometimes we want to create objects where the keys are not fixed ahead of time.
// Index signatures allow us to define flexible object structures in TypeScript.

// ---
// 📺 Task 10: Platforms with Boolean Values

// ✅ Step 1: Modify the interface to allow for index signature so we can add new keys and values

// ✅ Step 2: Add a new key named 'FilmStudio' and the value should be a string (i.e "Paramount", "Pixar"...etc)
movie.filmStudio = "Paramount";
// ✅ Step 3: Add a new key named 'Cast' and the value should be a string array of the names of the actors in the movie (["Robin Williams", "Ryan Reynolds"])
movie.cast = ["Robin Williams", "Ryan Reynolds"];
console.log(`let's check out how the signature index work`, movie);
