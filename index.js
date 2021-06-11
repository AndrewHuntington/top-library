const myLibrary = [];

// Constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const addBookToLibrary = (...books) => {
  for (const book of books) {
    myLibrary.push(book);
  }
  console.log(myLibrary);
};

// Sample Data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, true);
const theFellowshipOfTheRing = new Book(
  "The Fellowship of the Ring",
  "J.R.R. Tolkien",
  455,
  true
);
const theTwoTowers = new Book("The Two Towers", "J.R.R. Tolkien", 398, true);
const theReturnOfTheKing = new Book(
  "The Return of the King",
  "J.R.R. Tolkien",
  421,
  false
);

addBookToLibrary(
  theHobbit,
  theFellowshipOfTheRing,
  theTwoTowers,
  theReturnOfTheKing
);
