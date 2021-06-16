// Start with some dummy data
import library from "./library.js";

const myLibrary = library.length ? library : [];

// Constructor function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.changeReadStatus = function () {
  this.read = !this.read;
};

const addBookToLibrary = (...books) => {
  for (const book of books) {
    myLibrary.push(book);
  }
};

export { myLibrary, Book, addBookToLibrary };
