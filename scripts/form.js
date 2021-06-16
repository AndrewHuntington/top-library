import library from "./library.js";
import { tableBody, createNewRow } from "./index.js";
import { myLibrary, Book, addBookToLibrary } from "./book.js";

// Get Input from Form
const addBookBtn = document.querySelector("#add-book");
const form = document.querySelector("form");

addBookBtn.addEventListener("click", (e) => {
  // Prevent page reload (which will reset the library)
  e.preventDefault();

  const title = form.elements.title.value;
  const author = form.elements.author.value;
  const pages = form.elements.pages.value;
  const read = form.elements.read.checked;
  const index = myLibrary.length;

  const book = new Book(title, author, pages, read);
  addBookToLibrary(book);
  createNewRow(book, index);
  form.reset();
});
