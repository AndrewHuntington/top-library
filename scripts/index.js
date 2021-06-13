// Start with some dummy data
import books from "./dummyLibrary.js";
const myLibrary = books;

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

const libraryArea = document.querySelector("#library-area");
for (const book of myLibrary) {
  const bookInfo = document.createElement("div");
  bookInfo.classList.add("box", "notification", "is-info", "is-light");

  bookInfo.innerHTML = `
    <h2 class="b-title">${book.title}</h2>
    <h3 class="b-author">${book.author}</h3>
    <p class="b-pages">${book.pages}</p>
  `;

  libraryArea.appendChild(bookInfo);
}
