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

const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
	book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

const [primaryGenre, secondaryGenre, ...otherGenresAnyNameWeWant] = genres;
console.log(primaryGenre, secondaryGenre, otherGenresAnyNameWeWant);

// Spread operators
const newGenres = [...genres, "epic fantasy"];
newGenres;

// create new object with new property
const updatedBook = {
	...book,
	moviePublicationDate: "2001-12-19",
	pages: 2000,
};
updatedBook;

// Arrow functions
const getYear = (str) => str.split("-")[0];

// Template Literal
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${getYear(
	publicationDate
)}. The book has ${
	hasMovieAdaptation ? "" : "not"
} has been adapted as a movie`;
summary;

// Ternaries operator so no need to use if/else

const pagesRange =
	book.pages > 1000 ? "over a thousand" : "less than 1 thousand";
pagesRange;
console.log(`the book has ${pagesRange} pages`);

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy: 0, '', null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "Some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// optional chaining
function getTotalReviewCount(book) {
	const goodreads = book.reviews.goodreads?.reviewsCount ?? 0;
	const librarything = book.reviews.librarything?.reviewsCount ?? 0;
	return goodreads + librarything;
}
console.log(getTotalReviewCount(book));

// Array Map Method
const books = getBooks();
console.log(books);
// const x=[1, 2, 3, 4, 5].map((el)=>el*2)
// console.log(x)
const titles = books.map((book) => book.title);

const essentialData = books.map((book) => ({
	title: book.title,
	author: book.author,
	reviewsCount: getTotalReviewCount(book),
}));

// Filter method
console.log(`Filter Method`);
const longBooks = books.filter(
	(book) => book.pages > 500 && book.hasMovieAdaptation
);
longBooks;

// Mapping book genre with 'adventure' to adventureBooks on their title
const adventureBooks = books
	.filter((book) => book.genres.includes("adventure"))
	.map((book) => book.title);
adventureBooks;

// Array reduce method
const pageAllBooks = books.reduce((sum, book) => sum + book.pages, 0);
pageAllBooks;

// Array sort method
const arr = [3, 7, 1, 9, 6];
const sorted = arr.slice().sort((a, b) => a - b);
sorted;
arr;

const sortedByPage = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPage;
const sortedByPageBooks = sortedByPage.map((book) => ({
	title: book.title,
	pages: book.pages,
}));
sortedByPageBooks;
const newBook = {
	id: 6,
	title: "The harry potter",
	author: "j.k rowling",
};

// Add book to books array
const booksAfterAdd = [...books, newBook];
console.log(booksAfterAdd);

// Delete book from books array
const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 3);
booksAfterDelete;

// Update book objects from books array
const booksAfterUpdate = booksAfterDelete.map((book) =>
	book.id === 1 ? {...book, pages:1200000000} : book // update to empty object
);
booksAfterUpdate;
