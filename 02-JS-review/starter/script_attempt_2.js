const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}
/*
// Destructuring
const book = getBook(2);
book;

const book_title = book.title;
book_title;

const { title, author, genres, pages, publicationDate, hasMovieAdaptation } =
  book;

console.log(author, title);

console.log(genres);

console.log(genres[0]);
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;
console.log(primaryGenre, secondaryGenre);

// Rest Operator
console.log(otherGenres);

// Spread Operator
const newGenres = [...genres, "another fantasy"];
console.log(newGenres);
//Update object
// Added new property while replacing new property
const updatedBook = { ...book, moviePublicationDate: "2021-12-19", pages: 100 };
console.log(updatedBook);

//Arrow functions
//Original
// function getYear(str){
//   return str.split("-")[0]
// }

const getYear = (str) => {
  return str.split("-")[0];
};
console.log(getYear(publicationDate));


// Template literals
const summary = `${title} is a book with ${pages}, published in ${getYear(publicationDate)
  }. The book ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`;
summary;

//Ternary operators
const pagesRange = pages > 1000 ? "over 1000" : "less than 1000";
pagesRange;
console.log(`book has ${pagesRange} pages`);

//Short Circuiting - return only the first value when is (&& for false) (|| for true)
//Good for setting default values
console.log(true && "some string")
console.log(false && "some string")
console.log(hasMovieAdaptation && "this book has a movie")
//falsy value - null, undefine, 0, ''
console.log("jonas" && 0)
console.log(undefined && 'not undefine')

//trusy
console.log(true || "some string")
console.log(false || "some string")

console.log(book.translations.spanish)

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED"
spanishTranslation;

console.log(book.reviews.librarything.reviewsCount)

const countWrong = book.reviews.librarything.reviewsCount || 'No Data'
countWrong // wants count to be zero instead of No Data

//short circuit for falsy values
const count = book.reviews.librarything.reviewsCount ?? 'No Data'
count

//Optional Chaining - question mark to see if the value exists, or else show as undefined
function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
console.log(getTotalReviewCount(book))
console.log(getTotalReviewCount(getBook(3)))
*/

// Map method
const x = [1, 2, 3, 4, 5].map(el => el * 2);
console.log(x)


const books = getBooks(); //entire book arrays
//arr with all titles
const titles = books.map(book => book.title)
titles

// const essesntialData = book.map(book=>{
//   return {
//     title: book.title,
//     author: book.author
//   }
// })

function getTotalReviewCount(book) {
  const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

const essesntialData = books.map(book => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essesntialData

//Array Filter
const longBooksWithMovie = books.filter((book) => book.pages > 500).filter((book) => book.hasMovieAdaptation);
longBooksWithMovie

const adventureBooks = books.filter((book) => book.genres.includes("adventure")).map(book => book.title)
adventureBooks;

//Array Reduce(can do almost every array method mentioned)
const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0) // acc starts at 0
pagesAllBooks

//Array sort
const arr = [3, 7, 1, 9, 6]
const sorted = arr.slice().sort((a, b) => a - b)
const sortedDescending = arr.slice().sort((a, b) => b - a) // use slice() to avoid changing the original arr
sorted
sortedDescending
arr

const sortedByPages = books.slice().sort((a,b)=> b.pages - a.pages)
sortedByPages

//Working with immutable arrays
// 1. Add book object to array
const newBook = {
  id: 6,
  title: "Hary Poter and Chamber Secret",
  author: "J.K Rowling",
}
const booksAfterAdd = [...books, newBook]
booksAfterAdd

// 2) Delete book object from array
const booksAfterDelete = booksAfterAdd.filter(book=>book.id !== 3)
booksAfterDelete

// 3) update book object in the array
// if book id equals to 1, return empty object, else return original content of book
// const booksAfterUpdate = booksAfterDelete.map(book=>book.id === 1? {}:book) 

// if book id equals to 1, take from original content and change the pages number
const booksAfterUpdate = booksAfterDelete.map(book => book.id === 1 ? {...book, pages: 12000000} : book) 

booksAfterUpdate
