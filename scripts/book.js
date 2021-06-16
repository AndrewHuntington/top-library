import { stringifyLibrary } from "./library.js";

const myLibrary = localStorage.book ? JSON.parse(localStorage.book) : [];

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

const addBookToLibrary = (book) => {
  myLibrary.push(book);
  stringifyLibrary(myLibrary);
};

export { myLibrary, Book, addBookToLibrary };
