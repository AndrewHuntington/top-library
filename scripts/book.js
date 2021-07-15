import { stringifyLibrary } from "./library.js";

const myLibrary = localStorage.book ? JSON.parse(localStorage.book) : [];

// Constructor function
// Changed to a Class for TOP JS Classes exercise
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeReadStatus = () => {
    this.read = !this.read;
  };
}

// Moved to the class declaration for this exercise
// Book.prototype.changeReadStatus = function () {
//   this.read = !this.read;
// };

const addBookToLibrary = (book) => {
  myLibrary.push(book);
  stringifyLibrary(myLibrary);
};

export { myLibrary, Book, addBookToLibrary };
